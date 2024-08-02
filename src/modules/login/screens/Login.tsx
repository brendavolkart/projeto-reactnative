import { Text, View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/input';
import { ContainerLogin } from '../styles/login.style';

const Login = () => {
  const handleOnPress = () => {
    console.log('entrouuuuuuuuuuuuuuuu');
  };
  return (
    <View>
      <ContainerLogin>
        <Text>Oi brenda</Text>
        <Input />
        <Button margin="16px" title="ENTRAR" onPress={handleOnPress} />
      </ContainerLogin>
    </View>
  );
};

export default Login;
