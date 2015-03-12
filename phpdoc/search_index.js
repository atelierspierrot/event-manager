var search_data = {
    'index': {
        'searchIndex': ["eventmanager","eventmanager\\abstracteventmanageraware","eventmanager\\abstractobservable","eventmanager\\event","eventmanager\\eventinterface","eventmanager\\eventlistenerinterface","eventmanager\\eventmanager","eventmanager\\eventmanagerawareinterface","eventmanager\\eventmanagerextended","eventmanager\\eventmanagerinterface","eventmanager\\eventobserverproxy","eventmanager\\eventobserverstorage","eventmanager\\eventsubscriberinterface","eventmanager\\observableinterface","eventmanager\\observerinterface","eventmanager\\stdevent","eventmanager\\stdeventinterface","eventmanager\\abstracteventmanageraware::seteventmanager","eventmanager\\abstracteventmanageraware::geteventmanager","eventmanager\\abstractobservable::__construct","eventmanager\\abstractobservable::attachobserver","eventmanager\\abstractobservable::detachobserver","eventmanager\\abstractobservable::triggerevent","eventmanager\\event::__construct","eventmanager\\event::getsubject","eventmanager\\event::getname","eventmanager\\eventinterface::getsubject","eventmanager\\eventinterface::getname","eventmanager\\eventmanager::__construct","eventmanager\\eventmanager::seteventclass","eventmanager\\eventmanager::geteventclass","eventmanager\\eventmanager::addlistener","eventmanager\\eventmanager::removelistener","eventmanager\\eventmanager::haslisteners","eventmanager\\eventmanager::getlisteners","eventmanager\\eventmanager::addsubscriber","eventmanager\\eventmanager::removesubscriber","eventmanager\\eventmanager::triggerevent","eventmanager\\eventmanagerawareinterface::seteventmanager","eventmanager\\eventmanagerawareinterface::geteventmanager","eventmanager\\eventmanagerextended::listen","eventmanager\\eventmanagerextended::stoplisten","eventmanager\\eventmanagerextended::subscribe","eventmanager\\eventmanagerextended::stopsubscribe","eventmanager\\eventmanagerextended::on","eventmanager\\eventmanagerextended::off","eventmanager\\eventmanagerextended::trigger","eventmanager\\eventmanagerinterface::haslisteners","eventmanager\\eventmanagerinterface::getlisteners","eventmanager\\eventmanagerinterface::addlistener","eventmanager\\eventmanagerinterface::removelistener","eventmanager\\eventmanagerinterface::addsubscriber","eventmanager\\eventmanagerinterface::removesubscriber","eventmanager\\eventmanagerinterface::triggerevent","eventmanager\\eventobserverproxy::__construct","eventmanager\\eventobserverproxy::setcallback","eventmanager\\eventobserverproxy::handleevent","eventmanager\\eventobserverstorage::add","eventmanager\\eventobserverstorage::remove","eventmanager\\eventsubscriberinterface::getsubscribedevents","eventmanager\\observableinterface::attachobserver","eventmanager\\observableinterface::detachobserver","eventmanager\\observableinterface::triggerevent","eventmanager\\observerinterface::handleevent","eventmanager\\stdevent::ispropagationstopped","eventmanager\\stdevent::stoppropagation","eventmanager\\stdeventinterface::stoppropagation","eventmanager\\stdeventinterface::ispropagationstopped"],
        'info': [["EventManager","","EventManager.html","","",3],["AbstractEventManagerAware","EventManager","EventManager\/AbstractEventManagerAware.html","","Class AbstractEventManagerAware",1],["AbstractObservable","EventManager","EventManager\/AbstractObservable.html","","Class AbstractObservable",1],["Event","EventManager","EventManager\/Event.html"," < StdEvent","Class Event",1],["EventInterface","EventManager","EventManager\/EventInterface.html","","Interface EventInterface",1],["EventListenerInterface","EventManager","EventManager\/EventListenerInterface.html","","Interface EventListenerInterface",1],["EventManager","EventManager","EventManager\/EventManager.html","","Class EventManager",1],["EventManagerAwareInterface","EventManager","EventManager\/EventManagerAwareInterface.html","","Interface EventManagerAwareInterface",1],["EventManagerExtended","EventManager","EventManager\/EventManagerExtended.html"," < EventManager","Class EventManagerExtended",1],["EventManagerInterface","EventManager","EventManager\/EventManagerInterface.html","","Interface EventManagerInterface",1],["EventObserverProxy","EventManager","EventManager\/EventObserverProxy.html","","Class EventObserverProxy",1],["EventObserverStorage","EventManager","EventManager\/EventObserverStorage.html"," < ArrayObject","Class EventObserverStorage",1],["EventSubscriberInterface","EventManager","EventManager\/EventSubscriberInterface.html","","Interface EventSubscriberInterface",1],["ObservableInterface","EventManager","EventManager\/ObservableInterface.html","","Interface ObservableInterface",1],["ObserverInterface","EventManager","EventManager\/ObserverInterface.html","","Interface ObserverInterface",1],["StdEvent","EventManager","EventManager\/StdEvent.html","","Class StdEvent",1],["StdEventInterface","EventManager","EventManager\/StdEventInterface.html","","Interface StdEventInterface",1],["AbstractEventManagerAware::setEventManager","EventManager\\AbstractEventManagerAware","EventManager\/AbstractEventManagerAware.html#method_setEventManager","(<a href=\"EventManager\/EventManager.html\"><abbr title=\"EventManager\\EventManager\">EventManager<\/abbr><\/a> $manager)","",2],["AbstractEventManagerAware::getEventManager","EventManager\\AbstractEventManagerAware","EventManager\/AbstractEventManagerAware.html#method_getEventManager","()","",2],["AbstractObservable::__construct","EventManager\\AbstractObservable","EventManager\/AbstractObservable.html#method___construct","()","Initialize the observers storage registry",2],["AbstractObservable::attachObserver","EventManager\\AbstractObservable","EventManager\/AbstractObservable.html#method_attachObserver","(<a href=\"EventManager\/ObserverInterface.html\"><abbr title=\"EventManager\\ObserverInterface\">ObserverInterface<\/abbr><\/a>|array|callable $observer)","",2],["AbstractObservable::detachObserver","EventManager\\AbstractObservable","EventManager\/AbstractObservable.html#method_detachObserver","(<a href=\"EventManager\/ObserverInterface.html\"><abbr title=\"EventManager\\ObserverInterface\">ObserverInterface<\/abbr><\/a>|array|callable $observer)","",2],["AbstractObservable::triggerEvent","EventManager\\AbstractObservable","EventManager\/AbstractObservable.html#method_triggerEvent","(string|null $event_name = null)","",2],["Event::__construct","EventManager\\Event","EventManager\/Event.html#method___construct","(mixed $subject, string $name)","",2],["Event::getSubject","EventManager\\Event","EventManager\/Event.html#method_getSubject","()","",2],["Event::getName","EventManager\\Event","EventManager\/Event.html#method_getName","()","",2],["EventInterface::getSubject","EventManager\\EventInterface","EventManager\/EventInterface.html#method_getSubject","()","",2],["EventInterface::getName","EventManager\\EventInterface","EventManager\/EventInterface.html#method_getName","()","",2],["EventManager::__construct","EventManager\\EventManager","EventManager\/EventManager.html#method___construct","()","Initialize the observers storage registry",2],["EventManager::setEventClass","EventManager\\EventManager","EventManager\/EventManager.html#method_setEventClass","($name)","",2],["EventManager::getEventClass","EventManager\\EventManager","EventManager\/EventManager.html#method_getEventClass","()","",2],["EventManager::addListener","EventManager\\EventManager","EventManager\/EventManager.html#method_addListener","(<abbr title=\"EventManager\\$event\">$event<\/abbr> $event, <abbr title=\"EventManager\\$callback\">$callback<\/abbr> $callback)","",2],["EventManager::removeListener","EventManager\\EventManager","EventManager\/EventManager.html#method_removeListener","(<abbr title=\"EventManager\\$event\">$event<\/abbr> $event, <abbr title=\"EventManager\\$callback\">$callback<\/abbr> $callback)","",2],["EventManager::hasListeners","EventManager\\EventManager","EventManager\/EventManager.html#method_hasListeners","(<abbr title=\"EventManager\\$event\">$event<\/abbr> $event)","",2],["EventManager::getListeners","EventManager\\EventManager","EventManager\/EventManager.html#method_getListeners","(<abbr title=\"EventManager\\$event\">$event<\/abbr> $event)","",2],["EventManager::addSubscriber","EventManager\\EventManager","EventManager\/EventManager.html#method_addSubscriber","(<a href=\"EventManager\/EventSubscriberInterface.html\"><abbr title=\"EventManager\\EventSubscriberInterface\">EventSubscriberInterface<\/abbr><\/a> $subscriber)","",2],["EventManager::removeSubscriber","EventManager\\EventManager","EventManager\/EventManager.html#method_removeSubscriber","(<a href=\"EventManager\/EventSubscriberInterface.html\"><abbr title=\"EventManager\\EventSubscriberInterface\">EventSubscriberInterface<\/abbr><\/a> $subscriber)","",2],["EventManager::triggerEvent","EventManager\\EventManager","EventManager\/EventManager.html#method_triggerEvent","(string $event_name, mixed $subject = null)","",2],["EventManagerAwareInterface::setEventManager","EventManager\\EventManagerAwareInterface","EventManager\/EventManagerAwareInterface.html#method_setEventManager","(<a href=\"EventManager\/EventManager.html\"><abbr title=\"EventManager\\EventManager\">EventManager<\/abbr><\/a> $manager)","",2],["EventManagerAwareInterface::getEventManager","EventManager\\EventManagerAwareInterface","EventManager\/EventManagerAwareInterface.html#method_getEventManager","()","",2],["EventManagerExtended::listen","EventManager\\EventManagerExtended","EventManager\/EventManagerExtended.html#method_listen","(<abbr title=\"EventManager\\$event\">$event<\/abbr> $event, <abbr title=\"EventManager\\$callback\">$callback<\/abbr> $callback)","",2],["EventManagerExtended::stopListen","EventManager\\EventManagerExtended","EventManager\/EventManagerExtended.html#method_stopListen","(<abbr title=\"EventManager\\$event\">$event<\/abbr> $event, <abbr title=\"EventManager\\$callback\">$callback<\/abbr> $callback)","",2],["EventManagerExtended::subscribe","EventManager\\EventManagerExtended","EventManager\/EventManagerExtended.html#method_subscribe","(<a href=\"EventManager\/EventSubscriberInterface.html\"><abbr title=\"EventManager\\EventSubscriberInterface\">EventSubscriberInterface<\/abbr><\/a> $subscriber)","",2],["EventManagerExtended::stopSubscribe","EventManager\\EventManagerExtended","EventManager\/EventManagerExtended.html#method_stopSubscribe","(<a href=\"EventManager\/EventSubscriberInterface.html\"><abbr title=\"EventManager\\EventSubscriberInterface\">EventSubscriberInterface<\/abbr><\/a> $subscriber)","",2],["EventManagerExtended::on","EventManager\\EventManagerExtended","EventManager\/EventManagerExtended.html#method_on","(<abbr title=\"EventManager\\$event\">$event<\/abbr> $event, <abbr title=\"EventManager\\$callback\">$callback<\/abbr> $callback)","",2],["EventManagerExtended::off","EventManager\\EventManagerExtended","EventManager\/EventManagerExtended.html#method_off","(<abbr title=\"EventManager\\$event\">$event<\/abbr> $event, <abbr title=\"EventManager\\$callback\">$callback<\/abbr> $callback)","",2],["EventManagerExtended::trigger","EventManager\\EventManagerExtended","EventManager\/EventManagerExtended.html#method_trigger","(string $event, <a href=\"EventManager\/ObservableInterface.html\"><abbr title=\"EventManager\\ObservableInterface\">ObservableInterface<\/abbr><\/a> $subject)","",2],["EventManagerInterface::hasListeners","EventManager\\EventManagerInterface","EventManager\/EventManagerInterface.html#method_hasListeners","(<abbr title=\"EventManager\\$event_name\">$event_name<\/abbr> $event_name)","",2],["EventManagerInterface::getListeners","EventManager\\EventManagerInterface","EventManager\/EventManagerInterface.html#method_getListeners","(<abbr title=\"EventManager\\$event_name\">$event_name<\/abbr> $event_name)","",2],["EventManagerInterface::addListener","EventManager\\EventManagerInterface","EventManager\/EventManagerInterface.html#method_addListener","(<abbr title=\"EventManager\\$event\">$event<\/abbr> $event, <abbr title=\"EventManager\\$callback\">$callback<\/abbr> $callback)","",2],["EventManagerInterface::removeListener","EventManager\\EventManagerInterface","EventManager\/EventManagerInterface.html#method_removeListener","(<abbr title=\"EventManager\\$event\">$event<\/abbr> $event, <abbr title=\"EventManager\\$callback\">$callback<\/abbr> $callback)","",2],["EventManagerInterface::addSubscriber","EventManager\\EventManagerInterface","EventManager\/EventManagerInterface.html#method_addSubscriber","(<a href=\"EventManager\/EventSubscriberInterface.html\"><abbr title=\"EventManager\\EventSubscriberInterface\">EventSubscriberInterface<\/abbr><\/a> $subscriber)","",2],["EventManagerInterface::removeSubscriber","EventManager\\EventManagerInterface","EventManager\/EventManagerInterface.html#method_removeSubscriber","(<a href=\"EventManager\/EventSubscriberInterface.html\"><abbr title=\"EventManager\\EventSubscriberInterface\">EventSubscriberInterface<\/abbr><\/a> $subscriber)","",2],["EventManagerInterface::triggerEvent","EventManager\\EventManagerInterface","EventManager\/EventManagerInterface.html#method_triggerEvent","(string $event_name, mixed $subject = null)","",2],["EventObserverProxy::__construct","EventManager\\EventObserverProxy","EventManager\/EventObserverProxy.html#method___construct","(callable|null $callback = null)","",2],["EventObserverProxy::setCallback","EventManager\\EventObserverProxy","EventManager\/EventObserverProxy.html#method_setCallback","(callable|array $callback)","",2],["EventObserverProxy::handleEvent","EventManager\\EventObserverProxy","EventManager\/EventObserverProxy.html#method_handleEvent","(<a href=\"EventManager\/EventInterface.html\"><abbr title=\"EventManager\\EventInterface\">EventInterface<\/abbr><\/a> $event)","",2],["EventObserverStorage::add","EventManager\\EventObserverStorage","EventManager\/EventObserverStorage.html#method_add","(<a href=\"EventManager\/ObserverInterface.html\"><abbr title=\"EventManager\\ObserverInterface\">ObserverInterface<\/abbr><\/a>|array|callable $observer)","",2],["EventObserverStorage::remove","EventManager\\EventObserverStorage","EventManager\/EventObserverStorage.html#method_remove","(<a href=\"EventManager\/ObserverInterface.html\"><abbr title=\"EventManager\\ObserverInterface\">ObserverInterface<\/abbr><\/a>|array|callable $observer)","",2],["EventSubscriberInterface::getSubscribedEvents","EventManager\\EventSubscriberInterface","EventManager\/EventSubscriberInterface.html#method_getSubscribedEvents","()","This may return an array of subscribed events with",2],["ObservableInterface::attachObserver","EventManager\\ObservableInterface","EventManager\/ObservableInterface.html#method_attachObserver","(<a href=\"EventManager\/ObserverInterface.html\"><abbr title=\"EventManager\\ObserverInterface\">ObserverInterface<\/abbr><\/a>|array|callable $observer)","",2],["ObservableInterface::detachObserver","EventManager\\ObservableInterface","EventManager\/ObservableInterface.html#method_detachObserver","(<a href=\"EventManager\/ObserverInterface.html\"><abbr title=\"EventManager\\ObserverInterface\">ObserverInterface<\/abbr><\/a>|array|callable $observer)","",2],["ObservableInterface::triggerEvent","EventManager\\ObservableInterface","EventManager\/ObservableInterface.html#method_triggerEvent","(string|null $event_name = null)","",2],["ObserverInterface::handleEvent","EventManager\\ObserverInterface","EventManager\/ObserverInterface.html#method_handleEvent","(<a href=\"EventManager\/EventInterface.html\"><abbr title=\"EventManager\\EventInterface\">EventInterface<\/abbr><\/a> $event)","",2],["StdEvent::isPropagationStopped","EventManager\\StdEvent","EventManager\/StdEvent.html#method_isPropagationStopped","()","",2],["StdEvent::stopPropagation","EventManager\\StdEvent","EventManager\/StdEvent.html#method_stopPropagation","()","",2],["StdEventInterface::stopPropagation","EventManager\\StdEventInterface","EventManager\/StdEventInterface.html#method_stopPropagation","()","",2],["StdEventInterface::isPropagationStopped","EventManager\\StdEventInterface","EventManager\/StdEventInterface.html#method_isPropagationStopped","()","",2]]
    }
}
search_data['index']['longSearchIndex'] = search_data['index']['searchIndex']