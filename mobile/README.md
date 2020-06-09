## Tecnologias

- [ReactJS](https://pt-br.reactjs.org/)
- [Yarn](https://yarnpkg.com/lang/en/)

## Dependências

- [@expo-google-fonts/roboto](https://yarnpkg.com/en/package/@expo-google-fonts/roboto)
- [@expo-google-fonts/ubuntu](https://yarnpkg.com/en/package/@expo-google-fonts/ubuntu)
- [@react-native-community/masked-view](https://yarnpkg.com/en/package/@react-native-community/masked-view)
- [@react-navigation/native](https://yarnpkg.com/en/package/@react-navigation/native)
- [@react-navigation/stack](https://yarnpkg.com/en/package/@react-navigation/stack)
- [axios](https://yarnpkg.com/en/package/axios)
- [expo](https://yarnpkg.com/en/package/expo)
- [expo-constants](https://yarnpkg.com/en/package/expo-constants)
- [expo-font](https://yarnpkg.com/en/package/expo-font)
- [expo-location](https://yarnpkg.com/en/package/expo-location)
- [expo-mail-composer](https://yarnpkg.com/en/package/expo-mail-composer)
- [react](https://yarnpkg.com/en/package/react)
- [react-dom](https://yarnpkg.com/en/package/react-dom)
- [react-native](https://yarnpkg.com/en/package/react-native)
- [react-native-gesture-handler](https://yarnpkg.com/en/package/react-native-gesture-handler)
- [react-native-maps](https://yarnpkg.com/en/package/react-native-maps)
- [react-native-reanimated](https://yarnpkg.com/en/package/react-native-reanimated)
- [react-native-safe-area-context](https://yarnpkg.com/en/package/react-native-safe-area-context)
- [react-native-screens](https://yarnpkg.com/en/package/react-native-screens)
- [react-native-svg](https://yarnpkg.com/en/package/react-native-svg)
- [react-native-web](https://yarnpkg.com/en/package/react-native-web)

## Dependências de desenvolvimento

- [@babel/core](https://yarnpkg.com/en/package/@babel/core)
- [@types/react](https://yarnpkg.com/en/package/@types/react)
- [@types/react-native](https://yarnpkg.com/en/package/@types/react-native)
- [babel-preset-expo](https://yarnpkg.com/en/package/babel-preset-expo)
- [typescript](https://yarnpkg.com/en/package/typescript)

## Como iniciar

Faça um clone desse repositório e acesse a pasta mobile:

    git clone https://github.com/DouglasVarollo/NLW1.git
    cd NLW1/mobile

Agora nós precisamos instalar as dependências, podemos usar o yarn ou npm:

    yarn
    // ou npm install

Também precisamos instalar a cli do expo:

    yarn global add expo-cli
    // ou npm install expo-cli -g

Antes de executar a aplicação também precisamos modificar o arquivo **src/services/api.ts** e mudar para o IP da sua máquina.

E para executar a aplicação use o comando:

	yarn start
	// ou npm run start

E siga as instruções da documentação:

https://docs.expo.io/get-started/create-a-new-app/#starting-the-development-server