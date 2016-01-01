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
 * Class EventObserverStorage
 *
 * This will handle a collection of event observers all wrapped
 * in an `EventObserverProxy` object and indexed with a special
 * hash allowing to retrieve a defined observer.
 *
 * @author  piwi <me@e-piwi.fr>
 */
class EventObserverStorage
    extends \ArrayObject
{

    /**
     * @param ObserverInterface|array|callable $observer | array($object , $method) | $callback
     * @return $this
     */
    public function add($observer)
    {
        $safe_observer = new EventObserverProxy($observer);
        $id = $this->_getObjectHash($observer, $safe_observer);
        if (!$this->offsetExists($id)) {
            $this->offsetSet($id, $safe_observer);
        }
        return $this;
    }

    /**
     * @param ObserverInterface|array|callable $observer | array($object , $method) | $callback
     * @return $this
     */
    public function remove($observer)
    {
        $id = $this->_getObjectHash($observer);
        if ($this->offsetExists($id)) {
            $this->offsetUnset($id);
        }
        return $this;
    }

    /**
     * @param object|array|\Closure $callback
     * @param null|object $callback_proxy
     * @return string
     */
    protected function _getObjectHash($callback, $callback_proxy = null)
    {
        if (is_object($callback)) {
            return spl_object_hash($callback);
        } elseif (is_array($callback) && is_object($callback[0])) {
            return spl_object_hash($callback[0]) . $callback[1];
        } elseif (!is_null($callback_proxy)) {
            return spl_object_hash($callback_proxy);
        } else {
            return uniqid();
        }
    }
}
