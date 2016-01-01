<?php
/**
 * This file is part of the Event Manager package.
 *
 * Copyright (c) 2015-2016 Pierre Cassat <me@e-piwi.fr> and contributors
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * The source code of this package is available online at 
 * <http://github.com/atelierspierrot/event-manager>.
 */

namespace EventManager;

/**
 * Class EventObserverProxy
 *
 * This proxy class will try to always construct an object
 * compliant with the `ObserverInterface`. It uses a simple
 * `callback` property that can be:
 *
 * -    a "real" `ObserverInterface` object
 * -    another object with a `handleEvent( EventInterface $event )` method
 * -    an array like `array( class , method )` to call a specific method
 * -    a closure to call when the event is fired
 *
 * @author  piwi <me@e-piwi.fr>
 */
class EventObserverProxy
    implements ObserverInterface
{

    /**
     * @var null|callable
     */
    protected $callback = null;

    /**
     * @param callable|null $callback
     */
    public function __construct($callback = null)
    {
        if (!is_null($callback)) {
            $this->setCallback($callback);
        }
    }

    /**
     * @param callable|array $callback
     * @return $this
     * @throws \Exception
     */
    public function setCallback($callback)
    {
        if (
            !is_object($callback) && !is_callable($callback) && !(
                is_array($callback) &&
                count($callback)==2 &&
                is_object($callback[0]) &&
                is_callable(array(
                    get_class($callback[0]), $callback[1]
                ))
            )
        ) {
            throw new \Exception(
                sprintf('An event observer callback must be callable (got "%s")!', gettype($callback))
            );
        }
        $this->callback = $callback;
        return $this;
    }

    /**
     * @param EventInterface $event
     * @return mixed|null
     * @throws \Exception
     */
    public function handleEvent(EventInterface $event)
    {
        $return = null;
        if (!is_null($this->callback)) {
            try {
                if (is_object($this->callback) && !($this->callback instanceof \Closure)) {
                    if (method_exists($this->callback, 'handleEvent')) {
                        $return = call_user_func(array($this->callback, 'handleEvent'), $event);
                    } else {
                        throw new \Exception(
                            sprintf('An event observer must define a "handleEvent($event)" method (for class "%s")!', get_class($this->callback))
                        );
                    }
                } else {
                    $return = call_user_func($this->callback, $event);
                }
            } catch (\Exception $e) {
                throw $e;
            }
        }
        return $return;
    }
}
