import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Modal,
} from '@mantine/core';
import { GoogleButton, TwitterButton } from '../SocialButtons/SocialButtons';

function LoginModal({opened, close}) {
    const [type, toggle] = useToggle(['login', 'register']);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      lastName: '',
      phone: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });
  return (
    <Modal opened={opened} onClose={close} title="Authentication" styles={{ body: {backgroundColor: '#090325'}, header: {backgroundColor: '#090325', color: '#00B700'}, close: {color: '#00B700', '&:hover': {background: '#00B700', color: '#090325'}}, overlay: {backdropFilter: 'blur(5px)'}}} >
    <Paper radius="md" p="xl" withBorder >
      <Text size="lg" weight={500} mb={15} fw={700}>
        Welcome to WhatsAppGpt
      </Text>

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          {type === 'register' && (
            <>
            <div className="flex justify-around gap-2">
            <TextInput
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                radius="md"
              />
  
              <TextInput
                label="Surname"
                placeholder="Your last name"
                value={form.values.lastName}
                onChange={(event) => form.setFieldValue('lastName', event.currentTarget.value)}
                radius="md"
              />
            </div>

            <TextInput
            required
            label="Email"
            placeholder="hello@chat.gpt"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
            radius="md"
          />
            </>
          )}      

            <TextInput
                required
                label="Phone"
                placeholder="Your phone number"
                value={form.values.phone}
                onChange={(event) => form.setFieldValue('phone', event.currentTarget.value)}
                radius="md"
            />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Password should include at least 6 characters'}
            radius="md"
          />

          {type === 'register' && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
              styles={{ icon: { color: 'white', }, input: { background: form.values.terms ? '#00B700 !important' : 'white', border: form.values.terms ? 'transparent !important' : '1px solid black'}  }}
            />
          )}
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit" radius="xl" sx={{backgroundColor: '#090325 !important', color: '#00B700'}}>
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
    </Modal>
    
  )
}

export default LoginModal