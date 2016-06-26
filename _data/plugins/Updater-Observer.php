id: 9
name: 'Updater Observer'
description: 'This plugin observes package changes and refreshes Updaters state accordingly.'
category: Updater
properties: null

-----

$eventName = $modx->event->name;
switch($eventName) {

    case 'OnCacheUpdate':
        
        //$modx->log(modX::LOG_LEVEL_WARN, "[Updater] check if packages were changed...");

        $pkey = $modx->getOption('cache_packages_key', null, 'packages');
        if ( isset($results[ $pkey ]) && $results[$pkey]) {
            $modx->log(modX::LOG_LEVEL_INFO, "[Updater] packages have been changed, clearing updater cache.");

            $cacheOptions = array( xPDO::OPT_CACHE_KEY => 'updater' );
            $result = $modx->cacheManager->clean($cacheOptions);

            $modx->log(modX::LOG_LEVEL_INFO, "[Updater] clean result: ".$result);

            $modx->log(modX::LOG_LEVEL_WARN, "[Updater] Successfully cleared updater cache after package change.");
        }
        break;

    default:
        break;
}
return;