
(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:EventManager" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="EventManager.html">EventManager</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:EventManager_AbstractEventManagerAware" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="EventManager/AbstractEventManagerAware.html">AbstractEventManagerAware</a>                    </div>                </li>                            <li data-name="class:EventManager_AbstractObservable" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="EventManager/AbstractObservable.html">AbstractObservable</a>                    </div>                </li>                            <li data-name="class:EventManager_Event" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="EventManager/Event.html">Event</a>                    </div>                </li>                            <li data-name="class:EventManager_EventInterface" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="EventManager/EventInterface.html">EventInterface</a>                    </div>                </li>                            <li data-name="class:EventManager_EventListenerInterface" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="EventManager/EventListenerInterface.html">EventListenerInterface</a>                    </div>                </li>                            <li data-name="class:EventManager_EventManager" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="EventManager/EventManager.html">EventManager</a>                    </div>                </li>                            <li data-name="class:EventManager_EventManagerAwareInterface" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="EventManager/EventManagerAwareInterface.html">EventManagerAwareInterface</a>                    </div>                </li>                            <li data-name="class:EventManager_EventManagerExtended" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="EventManager/EventManagerExtended.html">EventManagerExtended</a>                    </div>                </li>                            <li data-name="class:EventManager_EventManagerInterface" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="EventManager/EventManagerInterface.html">EventManagerInterface</a>                    </div>                </li>                            <li data-name="class:EventManager_EventObserverProxy" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="EventManager/EventObserverProxy.html">EventObserverProxy</a>                    </div>                </li>                            <li data-name="class:EventManager_EventObserverStorage" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="EventManager/EventObserverStorage.html">EventObserverStorage</a>                    </div>                </li>                            <li data-name="class:EventManager_EventSubscriberInterface" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="EventManager/EventSubscriberInterface.html">EventSubscriberInterface</a>                    </div>                </li>                            <li data-name="class:EventManager_ObservableInterface" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="EventManager/ObservableInterface.html">ObservableInterface</a>                    </div>                </li>                            <li data-name="class:EventManager_ObserverInterface" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="EventManager/ObserverInterface.html">ObserverInterface</a>                    </div>                </li>                            <li data-name="class:EventManager_StdEvent" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="EventManager/StdEvent.html">StdEvent</a>                    </div>                </li>                            <li data-name="class:EventManager_StdEventInterface" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="EventManager/StdEventInterface.html">StdEventInterface</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "EventManager.html", "name": "EventManager", "doc": "Namespace EventManager"},
            {"type": "Interface", "fromName": "EventManager", "fromLink": "EventManager.html", "link": "EventManager/EventInterface.html", "name": "EventManager\\EventInterface", "doc": "&quot;Interface EventInterface&quot;"},
                                                        {"type": "Method", "fromName": "EventManager\\EventInterface", "fromLink": "EventManager/EventInterface.html", "link": "EventManager/EventInterface.html#method_getSubject", "name": "EventManager\\EventInterface::getSubject", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventInterface", "fromLink": "EventManager/EventInterface.html", "link": "EventManager/EventInterface.html#method_getName", "name": "EventManager\\EventInterface::getName", "doc": "&quot;\n&quot;"},
            
            {"type": "Interface", "fromName": "EventManager", "fromLink": "EventManager.html", "link": "EventManager/EventListenerInterface.html", "name": "EventManager\\EventListenerInterface", "doc": "&quot;Interface EventListenerInterface&quot;"},
                    
            {"type": "Interface", "fromName": "EventManager", "fromLink": "EventManager.html", "link": "EventManager/EventManagerAwareInterface.html", "name": "EventManager\\EventManagerAwareInterface", "doc": "&quot;Interface EventManagerAwareInterface&quot;"},
                                                        {"type": "Method", "fromName": "EventManager\\EventManagerAwareInterface", "fromLink": "EventManager/EventManagerAwareInterface.html", "link": "EventManager/EventManagerAwareInterface.html#method_setEventManager", "name": "EventManager\\EventManagerAwareInterface::setEventManager", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManagerAwareInterface", "fromLink": "EventManager/EventManagerAwareInterface.html", "link": "EventManager/EventManagerAwareInterface.html#method_getEventManager", "name": "EventManager\\EventManagerAwareInterface::getEventManager", "doc": "&quot;\n&quot;"},
            
            {"type": "Interface", "fromName": "EventManager", "fromLink": "EventManager.html", "link": "EventManager/EventManagerInterface.html", "name": "EventManager\\EventManagerInterface", "doc": "&quot;Interface EventManagerInterface&quot;"},
                                                        {"type": "Method", "fromName": "EventManager\\EventManagerInterface", "fromLink": "EventManager/EventManagerInterface.html", "link": "EventManager/EventManagerInterface.html#method_hasListeners", "name": "EventManager\\EventManagerInterface::hasListeners", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManagerInterface", "fromLink": "EventManager/EventManagerInterface.html", "link": "EventManager/EventManagerInterface.html#method_getListeners", "name": "EventManager\\EventManagerInterface::getListeners", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManagerInterface", "fromLink": "EventManager/EventManagerInterface.html", "link": "EventManager/EventManagerInterface.html#method_addListener", "name": "EventManager\\EventManagerInterface::addListener", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManagerInterface", "fromLink": "EventManager/EventManagerInterface.html", "link": "EventManager/EventManagerInterface.html#method_removeListener", "name": "EventManager\\EventManagerInterface::removeListener", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManagerInterface", "fromLink": "EventManager/EventManagerInterface.html", "link": "EventManager/EventManagerInterface.html#method_addSubscriber", "name": "EventManager\\EventManagerInterface::addSubscriber", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManagerInterface", "fromLink": "EventManager/EventManagerInterface.html", "link": "EventManager/EventManagerInterface.html#method_removeSubscriber", "name": "EventManager\\EventManagerInterface::removeSubscriber", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManagerInterface", "fromLink": "EventManager/EventManagerInterface.html", "link": "EventManager/EventManagerInterface.html#method_triggerEvent", "name": "EventManager\\EventManagerInterface::triggerEvent", "doc": "&quot;\n&quot;"},
            
            {"type": "Interface", "fromName": "EventManager", "fromLink": "EventManager.html", "link": "EventManager/EventSubscriberInterface.html", "name": "EventManager\\EventSubscriberInterface", "doc": "&quot;Interface EventSubscriberInterface&quot;"},
                                                        {"type": "Method", "fromName": "EventManager\\EventSubscriberInterface", "fromLink": "EventManager/EventSubscriberInterface.html", "link": "EventManager/EventSubscriberInterface.html#method_getSubscribedEvents", "name": "EventManager\\EventSubscriberInterface::getSubscribedEvents", "doc": "&quot;This may return an array of subscribed events with corresponding method&quot;"},
            
            {"type": "Interface", "fromName": "EventManager", "fromLink": "EventManager.html", "link": "EventManager/ObservableInterface.html", "name": "EventManager\\ObservableInterface", "doc": "&quot;Interface ObservableInterface&quot;"},
                                                        {"type": "Method", "fromName": "EventManager\\ObservableInterface", "fromLink": "EventManager/ObservableInterface.html", "link": "EventManager/ObservableInterface.html#method_attachObserver", "name": "EventManager\\ObservableInterface::attachObserver", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\ObservableInterface", "fromLink": "EventManager/ObservableInterface.html", "link": "EventManager/ObservableInterface.html#method_detachObserver", "name": "EventManager\\ObservableInterface::detachObserver", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\ObservableInterface", "fromLink": "EventManager/ObservableInterface.html", "link": "EventManager/ObservableInterface.html#method_triggerEvent", "name": "EventManager\\ObservableInterface::triggerEvent", "doc": "&quot;\n&quot;"},
            
            {"type": "Interface", "fromName": "EventManager", "fromLink": "EventManager.html", "link": "EventManager/ObserverInterface.html", "name": "EventManager\\ObserverInterface", "doc": "&quot;Interface ObserverInterface&quot;"},
                                                        {"type": "Method", "fromName": "EventManager\\ObserverInterface", "fromLink": "EventManager/ObserverInterface.html", "link": "EventManager/ObserverInterface.html#method_handleEvent", "name": "EventManager\\ObserverInterface::handleEvent", "doc": "&quot;\n&quot;"},
            
            {"type": "Interface", "fromName": "EventManager", "fromLink": "EventManager.html", "link": "EventManager/StdEventInterface.html", "name": "EventManager\\StdEventInterface", "doc": "&quot;Interface StdEventInterface&quot;"},
                                                        {"type": "Method", "fromName": "EventManager\\StdEventInterface", "fromLink": "EventManager/StdEventInterface.html", "link": "EventManager/StdEventInterface.html#method_stopPropagation", "name": "EventManager\\StdEventInterface::stopPropagation", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\StdEventInterface", "fromLink": "EventManager/StdEventInterface.html", "link": "EventManager/StdEventInterface.html#method_isPropagationStopped", "name": "EventManager\\StdEventInterface::isPropagationStopped", "doc": "&quot;\n&quot;"},
            
            
            {"type": "Class", "fromName": "EventManager", "fromLink": "EventManager.html", "link": "EventManager/AbstractEventManagerAware.html", "name": "EventManager\\AbstractEventManagerAware", "doc": "&quot;Class AbstractEventManagerAware&quot;"},
                                                        {"type": "Method", "fromName": "EventManager\\AbstractEventManagerAware", "fromLink": "EventManager/AbstractEventManagerAware.html", "link": "EventManager/AbstractEventManagerAware.html#method_setEventManager", "name": "EventManager\\AbstractEventManagerAware::setEventManager", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\AbstractEventManagerAware", "fromLink": "EventManager/AbstractEventManagerAware.html", "link": "EventManager/AbstractEventManagerAware.html#method_getEventManager", "name": "EventManager\\AbstractEventManagerAware::getEventManager", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "EventManager", "fromLink": "EventManager.html", "link": "EventManager/AbstractObservable.html", "name": "EventManager\\AbstractObservable", "doc": "&quot;Class AbstractObservable&quot;"},
                                                        {"type": "Method", "fromName": "EventManager\\AbstractObservable", "fromLink": "EventManager/AbstractObservable.html", "link": "EventManager/AbstractObservable.html#method___construct", "name": "EventManager\\AbstractObservable::__construct", "doc": "&quot;Initialize the observers storage registry&quot;"},
                    {"type": "Method", "fromName": "EventManager\\AbstractObservable", "fromLink": "EventManager/AbstractObservable.html", "link": "EventManager/AbstractObservable.html#method_attachObserver", "name": "EventManager\\AbstractObservable::attachObserver", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\AbstractObservable", "fromLink": "EventManager/AbstractObservable.html", "link": "EventManager/AbstractObservable.html#method_detachObserver", "name": "EventManager\\AbstractObservable::detachObserver", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\AbstractObservable", "fromLink": "EventManager/AbstractObservable.html", "link": "EventManager/AbstractObservable.html#method_triggerEvent", "name": "EventManager\\AbstractObservable::triggerEvent", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "EventManager", "fromLink": "EventManager.html", "link": "EventManager/Event.html", "name": "EventManager\\Event", "doc": "&quot;Class Event&quot;"},
                                                        {"type": "Method", "fromName": "EventManager\\Event", "fromLink": "EventManager/Event.html", "link": "EventManager/Event.html#method___construct", "name": "EventManager\\Event::__construct", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\Event", "fromLink": "EventManager/Event.html", "link": "EventManager/Event.html#method_getSubject", "name": "EventManager\\Event::getSubject", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\Event", "fromLink": "EventManager/Event.html", "link": "EventManager/Event.html#method_getName", "name": "EventManager\\Event::getName", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "EventManager", "fromLink": "EventManager.html", "link": "EventManager/EventInterface.html", "name": "EventManager\\EventInterface", "doc": "&quot;Interface EventInterface&quot;"},
                                                        {"type": "Method", "fromName": "EventManager\\EventInterface", "fromLink": "EventManager/EventInterface.html", "link": "EventManager/EventInterface.html#method_getSubject", "name": "EventManager\\EventInterface::getSubject", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventInterface", "fromLink": "EventManager/EventInterface.html", "link": "EventManager/EventInterface.html#method_getName", "name": "EventManager\\EventInterface::getName", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "EventManager", "fromLink": "EventManager.html", "link": "EventManager/EventListenerInterface.html", "name": "EventManager\\EventListenerInterface", "doc": "&quot;Interface EventListenerInterface&quot;"},
                    
            {"type": "Class", "fromName": "EventManager", "fromLink": "EventManager.html", "link": "EventManager/EventManager.html", "name": "EventManager\\EventManager", "doc": "&quot;Class EventManager&quot;"},
                                                        {"type": "Method", "fromName": "EventManager\\EventManager", "fromLink": "EventManager/EventManager.html", "link": "EventManager/EventManager.html#method___construct", "name": "EventManager\\EventManager::__construct", "doc": "&quot;Initialize the observers storage registry&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManager", "fromLink": "EventManager/EventManager.html", "link": "EventManager/EventManager.html#method_setEventClass", "name": "EventManager\\EventManager::setEventClass", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManager", "fromLink": "EventManager/EventManager.html", "link": "EventManager/EventManager.html#method_getEventClass", "name": "EventManager\\EventManager::getEventClass", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManager", "fromLink": "EventManager/EventManager.html", "link": "EventManager/EventManager.html#method_addListener", "name": "EventManager\\EventManager::addListener", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManager", "fromLink": "EventManager/EventManager.html", "link": "EventManager/EventManager.html#method_removeListener", "name": "EventManager\\EventManager::removeListener", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManager", "fromLink": "EventManager/EventManager.html", "link": "EventManager/EventManager.html#method_hasListeners", "name": "EventManager\\EventManager::hasListeners", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManager", "fromLink": "EventManager/EventManager.html", "link": "EventManager/EventManager.html#method_getListeners", "name": "EventManager\\EventManager::getListeners", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManager", "fromLink": "EventManager/EventManager.html", "link": "EventManager/EventManager.html#method_addSubscriber", "name": "EventManager\\EventManager::addSubscriber", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManager", "fromLink": "EventManager/EventManager.html", "link": "EventManager/EventManager.html#method_removeSubscriber", "name": "EventManager\\EventManager::removeSubscriber", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManager", "fromLink": "EventManager/EventManager.html", "link": "EventManager/EventManager.html#method_triggerEvent", "name": "EventManager\\EventManager::triggerEvent", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "EventManager", "fromLink": "EventManager.html", "link": "EventManager/EventManagerAwareInterface.html", "name": "EventManager\\EventManagerAwareInterface", "doc": "&quot;Interface EventManagerAwareInterface&quot;"},
                                                        {"type": "Method", "fromName": "EventManager\\EventManagerAwareInterface", "fromLink": "EventManager/EventManagerAwareInterface.html", "link": "EventManager/EventManagerAwareInterface.html#method_setEventManager", "name": "EventManager\\EventManagerAwareInterface::setEventManager", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManagerAwareInterface", "fromLink": "EventManager/EventManagerAwareInterface.html", "link": "EventManager/EventManagerAwareInterface.html#method_getEventManager", "name": "EventManager\\EventManagerAwareInterface::getEventManager", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "EventManager", "fromLink": "EventManager.html", "link": "EventManager/EventManagerExtended.html", "name": "EventManager\\EventManagerExtended", "doc": "&quot;Class EventManagerExtended&quot;"},
                                                        {"type": "Method", "fromName": "EventManager\\EventManagerExtended", "fromLink": "EventManager/EventManagerExtended.html", "link": "EventManager/EventManagerExtended.html#method_listen", "name": "EventManager\\EventManagerExtended::listen", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManagerExtended", "fromLink": "EventManager/EventManagerExtended.html", "link": "EventManager/EventManagerExtended.html#method_stopListen", "name": "EventManager\\EventManagerExtended::stopListen", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManagerExtended", "fromLink": "EventManager/EventManagerExtended.html", "link": "EventManager/EventManagerExtended.html#method_subscribe", "name": "EventManager\\EventManagerExtended::subscribe", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManagerExtended", "fromLink": "EventManager/EventManagerExtended.html", "link": "EventManager/EventManagerExtended.html#method_stopSubscribe", "name": "EventManager\\EventManagerExtended::stopSubscribe", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManagerExtended", "fromLink": "EventManager/EventManagerExtended.html", "link": "EventManager/EventManagerExtended.html#method_on", "name": "EventManager\\EventManagerExtended::on", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManagerExtended", "fromLink": "EventManager/EventManagerExtended.html", "link": "EventManager/EventManagerExtended.html#method_off", "name": "EventManager\\EventManagerExtended::off", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManagerExtended", "fromLink": "EventManager/EventManagerExtended.html", "link": "EventManager/EventManagerExtended.html#method_trigger", "name": "EventManager\\EventManagerExtended::trigger", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "EventManager", "fromLink": "EventManager.html", "link": "EventManager/EventManagerInterface.html", "name": "EventManager\\EventManagerInterface", "doc": "&quot;Interface EventManagerInterface&quot;"},
                                                        {"type": "Method", "fromName": "EventManager\\EventManagerInterface", "fromLink": "EventManager/EventManagerInterface.html", "link": "EventManager/EventManagerInterface.html#method_hasListeners", "name": "EventManager\\EventManagerInterface::hasListeners", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManagerInterface", "fromLink": "EventManager/EventManagerInterface.html", "link": "EventManager/EventManagerInterface.html#method_getListeners", "name": "EventManager\\EventManagerInterface::getListeners", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManagerInterface", "fromLink": "EventManager/EventManagerInterface.html", "link": "EventManager/EventManagerInterface.html#method_addListener", "name": "EventManager\\EventManagerInterface::addListener", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManagerInterface", "fromLink": "EventManager/EventManagerInterface.html", "link": "EventManager/EventManagerInterface.html#method_removeListener", "name": "EventManager\\EventManagerInterface::removeListener", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManagerInterface", "fromLink": "EventManager/EventManagerInterface.html", "link": "EventManager/EventManagerInterface.html#method_addSubscriber", "name": "EventManager\\EventManagerInterface::addSubscriber", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManagerInterface", "fromLink": "EventManager/EventManagerInterface.html", "link": "EventManager/EventManagerInterface.html#method_removeSubscriber", "name": "EventManager\\EventManagerInterface::removeSubscriber", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventManagerInterface", "fromLink": "EventManager/EventManagerInterface.html", "link": "EventManager/EventManagerInterface.html#method_triggerEvent", "name": "EventManager\\EventManagerInterface::triggerEvent", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "EventManager", "fromLink": "EventManager.html", "link": "EventManager/EventObserverProxy.html", "name": "EventManager\\EventObserverProxy", "doc": "&quot;Class EventObserverProxy&quot;"},
                                                        {"type": "Method", "fromName": "EventManager\\EventObserverProxy", "fromLink": "EventManager/EventObserverProxy.html", "link": "EventManager/EventObserverProxy.html#method___construct", "name": "EventManager\\EventObserverProxy::__construct", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventObserverProxy", "fromLink": "EventManager/EventObserverProxy.html", "link": "EventManager/EventObserverProxy.html#method_setCallback", "name": "EventManager\\EventObserverProxy::setCallback", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventObserverProxy", "fromLink": "EventManager/EventObserverProxy.html", "link": "EventManager/EventObserverProxy.html#method_handleEvent", "name": "EventManager\\EventObserverProxy::handleEvent", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "EventManager", "fromLink": "EventManager.html", "link": "EventManager/EventObserverStorage.html", "name": "EventManager\\EventObserverStorage", "doc": "&quot;Class EventObserverStorage&quot;"},
                                                        {"type": "Method", "fromName": "EventManager\\EventObserverStorage", "fromLink": "EventManager/EventObserverStorage.html", "link": "EventManager/EventObserverStorage.html#method_add", "name": "EventManager\\EventObserverStorage::add", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\EventObserverStorage", "fromLink": "EventManager/EventObserverStorage.html", "link": "EventManager/EventObserverStorage.html#method_remove", "name": "EventManager\\EventObserverStorage::remove", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "EventManager", "fromLink": "EventManager.html", "link": "EventManager/EventSubscriberInterface.html", "name": "EventManager\\EventSubscriberInterface", "doc": "&quot;Interface EventSubscriberInterface&quot;"},
                                                        {"type": "Method", "fromName": "EventManager\\EventSubscriberInterface", "fromLink": "EventManager/EventSubscriberInterface.html", "link": "EventManager/EventSubscriberInterface.html#method_getSubscribedEvents", "name": "EventManager\\EventSubscriberInterface::getSubscribedEvents", "doc": "&quot;This may return an array of subscribed events with corresponding method&quot;"},
            
            {"type": "Class", "fromName": "EventManager", "fromLink": "EventManager.html", "link": "EventManager/ObservableInterface.html", "name": "EventManager\\ObservableInterface", "doc": "&quot;Interface ObservableInterface&quot;"},
                                                        {"type": "Method", "fromName": "EventManager\\ObservableInterface", "fromLink": "EventManager/ObservableInterface.html", "link": "EventManager/ObservableInterface.html#method_attachObserver", "name": "EventManager\\ObservableInterface::attachObserver", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\ObservableInterface", "fromLink": "EventManager/ObservableInterface.html", "link": "EventManager/ObservableInterface.html#method_detachObserver", "name": "EventManager\\ObservableInterface::detachObserver", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\ObservableInterface", "fromLink": "EventManager/ObservableInterface.html", "link": "EventManager/ObservableInterface.html#method_triggerEvent", "name": "EventManager\\ObservableInterface::triggerEvent", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "EventManager", "fromLink": "EventManager.html", "link": "EventManager/ObserverInterface.html", "name": "EventManager\\ObserverInterface", "doc": "&quot;Interface ObserverInterface&quot;"},
                                                        {"type": "Method", "fromName": "EventManager\\ObserverInterface", "fromLink": "EventManager/ObserverInterface.html", "link": "EventManager/ObserverInterface.html#method_handleEvent", "name": "EventManager\\ObserverInterface::handleEvent", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "EventManager", "fromLink": "EventManager.html", "link": "EventManager/StdEvent.html", "name": "EventManager\\StdEvent", "doc": "&quot;Class StdEvent&quot;"},
                                                        {"type": "Method", "fromName": "EventManager\\StdEvent", "fromLink": "EventManager/StdEvent.html", "link": "EventManager/StdEvent.html#method_isPropagationStopped", "name": "EventManager\\StdEvent::isPropagationStopped", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\StdEvent", "fromLink": "EventManager/StdEvent.html", "link": "EventManager/StdEvent.html#method_stopPropagation", "name": "EventManager\\StdEvent::stopPropagation", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "EventManager", "fromLink": "EventManager.html", "link": "EventManager/StdEventInterface.html", "name": "EventManager\\StdEventInterface", "doc": "&quot;Interface StdEventInterface&quot;"},
                                                        {"type": "Method", "fromName": "EventManager\\StdEventInterface", "fromLink": "EventManager/StdEventInterface.html", "link": "EventManager/StdEventInterface.html#method_stopPropagation", "name": "EventManager\\StdEventInterface::stopPropagation", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "EventManager\\StdEventInterface", "fromLink": "EventManager/StdEventInterface.html", "link": "EventManager/StdEventInterface.html#method_isPropagationStopped", "name": "EventManager\\StdEventInterface::isPropagationStopped", "doc": "&quot;\n&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


