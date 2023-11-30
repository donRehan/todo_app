## Older node version 
[1/4] 🔍  Resolving packages...
info No lockfile found.
[2/4] 🚚  Fetching packages...
error @jest/create-cache-key-function@29.5.0: The engine "node" is incompatible with this module. Expected version "^14.15.0 || ^16.10.0 || >=18.0.0". Got "16.9.0"
error Found incompatible module.
info Visit https://yarnpkg.com/en/docs/cli/add for documentation about this command.

> Resolved by downloading from the site of node for mac the version 16.10.0

## Xcode needs to be installed , when its already installed

> Resolved by following the following thread https://developer.apple.com/forums/thread/678469

## Text Component error from react-native 
 ERROR  Error: Text strings must be rendered within a <Text> component.

This error is located at:
    in $29383e587d62412a$export$9f8ac96af4b1b2ae (created by NativeBaseProvider)
    in ToastProvider (created by NativeBaseProvider)
    in PortalProvider (created by NativeBaseProvider)
    in HybridProvider (created by NativeBaseProvider)
    in ResponsiveQueryProvider (created by NativeBaseProvider)
    in RNCSafeAreaProvider (created by SafeAreaProvider)
    in SafeAreaProvider (created by NativeBaseProvider)
    in NativeBaseConfigProviderProvider (created by NativeBaseProvider)
    in NativeBaseProvider (created by AppContainer)
    in EnsureSingleNavigator
    in BaseNavigationContainer
    in ThemeProvider
    in NavigationContainerInner (created by AppContainer)
    in AppContainer (created by App)
    in App (created by withDevTools(App))
    in withDevTools(App)
    in RCTView (created by View)
    in View (created by AppContainer)
    in RCTView (created by View)
    in View (created by AppContainer)
    in AppContainer
    in main(RootComponent), js engine: hermes

> After alot of research , turns out that this was the difference 
> const config = {
> -       useSystemColorMode: false,
> -       initialColorMode: 'light',
> +  useSystemColorMode: false,
> +  initialColorMode: 'light'
>  }
> The colon at the end I suppose, thats the only difference I could find in my git diff after it magically
> Worked

## SVG custom made by the tutorial maker

> Used a normal checkbox for react native.
> Find it below in this link
> https://github.com/WrathChaos/react-native-bouncy-checkbox

## Unable to develop for Ios on my linux machine 

> Simply after doing yarn start a warning message about updating my version
> for a couple of add ons , Updated and things worked fine.
