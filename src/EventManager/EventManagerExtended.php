<?php
/**
 * This file is part of the Event Manager package.
 *
 * Copyright (c) 2015 Pierre Cassat <me@e-piwi.fr> and contributors
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
 * Class EventManagerExtended
 *
 * This only defines aliases to use event handling with facilities:
 *
 *      $eventManager
 *
 *          ->listen ( event , callback )
 *          ->stopListen ( event , callback )
 *
 *          ->subscribe ( event , subscriber )
 *          ->stopSubscribe ( event , subscriber )
 *
 *          ->on ( event , callback )
 *          ->off ( event , callback )
 *
 *          ->trigger ( event , subject )
 *
 * All aliases return the object itself for method chaining and
 * will throw any caught exception.
 *
 */
class EventManagerExtended
    extends EventManager
{

// ---------------------------
// Aliases
// ---------------------------

    /**
     * @param $event
     * @param $callback
     * @return $this
     * @throws \Exception
     */
    public function listen($event, $callback)
    {
        try {
            $this->addListener($event, $callback);
        } catch (\Exception $e) {
            throw $e;
        }
        return $this;
    }

    /**
     * @param $event
     * @param $callback
     * @return $this
     * @throws \Exception
     */
    public function stopListen($event, $callback)
    {
        try {
            $this->removeListener($event, $callback);
        } catch (\Exception $e) {
            throw $e;
        }
        return $this;
    }

    /**
     * @param EventSubscriberInterface $subscriber
     * @return $this
     * @throws \Exception
     */
    public function subscribe(EventSubscriberInterface $subscriber)
    {
        try {
            $this->addSubscriber($subscriber);
        } catch (\Exception $e) {
            throw $e;
        }
        return $this;
    }

    /**
     * @param EventSubscriberInterface $subscriber
     * @return $this
     * @throws \Exception
     */
    public function stopSubscribe(EventSubscriberInterface $subscriber)
    {
        try {
            $this->removeSubscriber($subscriber);
        } catch (\Exception $e) {
            throw $e;
        }
        return $this;
    }

    /**
     * @param $event
     * @param $callback
     * @throws \Exception
     * @return $this
     */
    public function on($event, $callback)
    {
        try {
            $this->addListener($event, $callback);
        } catch (\Exception $e) {
            throw $e;
        }
        return $this;
    }

    /**
     * @param $event
     * @param $callback
     * @throws \Exception
     * @return $this
     */
    public function off($event, $callback)
    {
        try {
            $this->removeListener($event, $callback);
        } catch (\Exception $e) {
            throw $e;
        }
        return $this;
    }

    /**
     * @param string $event
     * @param ObservableInterface $subject
     * @throws \Exception
     * @return $this
     */
    public function trigger($event, ObservableInterface $subject)
    {
        try {
            $this->triggerEvent($event, $subject);
        } catch (\Exception $e) {
            throw $e;
        }
        return $this;
    }

}

// Endfile