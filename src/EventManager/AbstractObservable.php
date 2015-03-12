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

use \Library\Helper\Code as CodeHelper;

/**
 * Class AbstractObservable
 *
 * @author  piwi <me@e-piwi.fr>
 */
abstract class AbstractObservable
    implements ObservableInterface
{

    /**
     * @var EventObserverStorage
     */
    protected $_observers_storage;

    /**
     * Initialize the observers storage registry
     */
    public function __construct()
    {
        $this->_observers_storage = new EventObserverStorage();
    }

    /**
     * @param ObserverInterface|array|callable $observer | array($object , $method) | $callback
     * @return $this
     */
    public function attachObserver($observer)
    {
        $this->_observers_storage->add($observer);
        return $this;
    }

    /**
     * @param ObserverInterface|array|callable $observer | array($object , $method) | $callback
     * @return $this
     */
    public function detachObserver($observer)
    {
        $this->_observers_storage->remove($observer);
        return $this;
    }

    /**
     * @param string|null $event_name
     * @return $this
     */
    public function triggerEvent($event_name = null)
    {
        if (is_null($event_name)) {
            $event_name = CodeHelper::getPropertyName(get_class($this));
        }
        $event = new Event($this, $event_name);
        foreach ($this->_observers_storage as $observer) {
            if ($event->isPropagationStopped()) {
                break;
            }
            /* @var EventObserverProxy $observer */
            $observer->handleEvent($event);
        }
        return $this;
    }

}

// Endfile