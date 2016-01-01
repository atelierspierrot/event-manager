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
 * Interface ObservableInterface
 *
 * @author  piwi <me@e-piwi.fr>
 */
interface ObservableInterface
{

    /**
     * @param ObserverInterface|array|callable $observer | array($object , $method) | $callback
     * @return void
     */
    public function attachObserver($observer);

    /**
     * @param ObserverInterface|array|callable $observer | array($object , $method) | $callback
     * @return void
     */
    public function detachObserver($observer);

    /**
     * @param string|null $event_name
     * @return void
     */
    public function triggerEvent($event_name = null);
}
