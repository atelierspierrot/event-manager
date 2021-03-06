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
 * Class Event
 *
 * @author  piwi <me@e-piwi.fr>
 */
class Event
    extends StdEvent
    implements EventInterface
{

    /**
     * @var string
     */
    protected $_name;

    /**
     * @var ObservableInterface
     */
    protected $_subject;

    /**
     * @param mixed     $subject
     * @param string    $name
     */
    public function __construct($subject, $name)
    {
        $this->_subject = $subject;
        $this->_name    = $name;
    }

    /**
     * @return mixed
     */
    public function getSubject()
    {
        return $this->_subject;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->_name;
    }
}
