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
 * Interface EventManagerInterface
 *
 * @author  piwi <me@e-piwi.fr>
 */
interface EventManagerInterface
{

    /**
     * @param $event_name
     * @return bool
     */
    public function hasListeners($event_name);

    /**
     * @param $event_name
     * @return array|null
     */
    public function getListeners($event_name);

    /**
     * @param $event
     * @param $callback
     */
    public function addListener($event, $callback);

    /**
     * @param $event
     * @param $callback
     */
    public function removeListener($event, $callback);

    /**
     * @param EventSubscriberInterface $subscriber
     */
    public function addSubscriber(EventSubscriberInterface $subscriber);

    /**
     * @param EventSubscriberInterface $subscriber
     */
    public function removeSubscriber(EventSubscriberInterface $subscriber);

    /**
     * @param string $event_name
     * @param mixed $subject
     * @return mixed
     */
    public function triggerEvent($event_name, $subject = null);
}
