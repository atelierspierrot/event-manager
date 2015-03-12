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
 * Class EventManager
 *
 * This is a global event handling manager. It will store
 * all *listeners* and *subscribers* for specific events
 * in an instance of `EventObserverStorage` and trigger
 * the observers methods when an event is fired.
 *
 * @author  piwi <me@e-piwi.fr>
 */
class EventManager
    implements EventManagerInterface
{

    /**
     * The default event class name
     */
    const EVENT_CLASSNAME = '\EventManager\Event';

    /**
     * @var EventObserverStorage
     */
    protected $_observers_storage;

    /**
     * @var string
     */
    protected $_event_class;

    /**
     * Initialize the observers storage registry
     */
    public function __construct()
    {
        $this->_observers_storage = new EventObserverStorage();
        $this->setEventClass(self::EVENT_CLASSNAME);
    }

    public function setEventClass($name)
    {
        if (
            class_exists($name) &&
            ($name===self::EVENT_CLASSNAME || is_subclass_of($name, self::EVENT_CLASSNAME))
        ) {
            $this->_event_class = $name;
        } else {
            throw new \InvalidArgumentException(
                sprintf('An event class must exist and extend "%s" (trying to set "%s")!',
                    self::EVENT_CLASSNAME, $name)
            );
        }
    }

    public function getEventClass()
    {
        return $this->_event_class;
    }

    /**
     * @param $event
     * @param $callback
     * @return $this
     * @throws \Exception
     */
    public function addListener($event, $callback)
    {
        if (!isset($this->_observers_storage[$event])) {
            $this->_observers_storage[$event] = new EventObserverStorage();
        }
        $this->_observers_storage[$event]->add($callback);
        return $this;
    }

    /**
     * @param $event
     * @param $callback
     * @return $this
     * @throws \Exception
     */
    public function removeListener($event, $callback)
    {
        if (isset($this->_observers_storage[$event])) {
            $this->_observers_storage[$event]->remove($callback);
        }
        return $this;
    }

    /**
     * @param $event
     * @return bool
     */
    public function hasListeners($event)
    {
        return (bool) (isset($this->_observers_storage[$event]) && count($this->_observers_storage[$event]));
    }

    /**
     * @param $event
     * @return array|null
     */
    public function getListeners($event)
    {
        if ($this->hasListeners($event)) {
            return $this->_observers_storage[$event];
        }
        return null;
    }

    /**
     * @param EventSubscriberInterface $subscriber
     * @return $this
     * @throws \Exception
     */
    public function addSubscriber(EventSubscriberInterface $subscriber)
    {
        $listeners = $subscriber->getSubscribedEvents();
        foreach ($listeners as $event => $listener) {
            try {
                $this->addListener($event, array($subscriber, $listener));
            } catch (\Exception $e) {
                throw $e;
            }
        }
        return $this;
    }

    /**
     * @param EventSubscriberInterface $subscriber
     * @return $this
     * @throws \Exception
     */
    public function removeSubscriber(EventSubscriberInterface $subscriber)
    {
        $listeners = $subscriber->getSubscribedEvents();
        foreach ($listeners as $event => $listener) {
            try {
                $this->removeListener($event, array($subscriber, $listener));
            } catch (\Exception $e) {
                throw $e;
            }
        }
        return $this;
    }

    /**
     * @param string $event_name
     * @param mixed $subject
     * @return $this
     */
    public function triggerEvent($event_name, $subject = null)
    {
        if (is_null($event_name)) {
            return $this;
        }
        $event_class    = $this->getEventClass();
        $event          = new $event_class($subject, $event_name);
        if (isset($this->_observers_storage[$event_name])) {
            foreach ($this->_observers_storage[$event_name] as $observer) {
                if ($event->isPropagationStopped()) {
                    break;
                }
                /* @var EventObserverProxy $observer */
                $observer->handleEvent($event);
            }
        }
        return $this;
    }

}

// Endfile