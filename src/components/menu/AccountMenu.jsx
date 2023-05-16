import React, {forwardRef, useImperativeHandle} from 'react';
import { Menu, Group, Text, Avatar, useMantineTheme, ActionIcon } from '@mantine/core';
import {
  IconLogout,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
  IconChevronRight,
  IconDots,
} from '@tabler/icons-react';

const AccountMenu = forwardRef((props, buttonRef) => {
    const { menuButtonRef, ...rest} = props;

    useImperativeHandle(buttonRef, () => ({
        getButtonRef: () => menuButtonRef.current,
    }));
  const theme = useMantineTheme();
  return (
    <Group position="center">
      <Menu
        withArrow
        width={300}
        position={'right'}
        transitionProps={{ transition: 'pop' }}
        withinPortal
        {...rest}
        opened={props.open}
        onClose={props.close}
        control={buttonRef}
      >
        <Menu.Dropdown>
          <Menu.Item rightSection={<IconChevronRight size="0.9rem" stroke={1.5} />}>
            <Group>
              <Avatar
                radius="xl"
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
              />

              <div>
                <Text weight={500}>Dylan Petzer</Text>
                <Text size="xs" color="dimmed">
                  2610dylan@gmail.com
                </Text>
              </div>
            </Group>
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Settings</Menu.Label>
          <Menu.Item icon={<IconSettings size="0.9rem" stroke={1.5} />}>Account settings</Menu.Item>
          <Menu.Item icon={<IconSwitchHorizontal size="0.9rem" stroke={1.5} />}>
            Change account
          </Menu.Item>
          <Menu.Item icon={<IconLogout size="0.9rem" stroke={1.5} />}>Logout</Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item icon={<IconPlayerPause size="0.9rem" stroke={1.5} />}>
            Pause subscription
          </Menu.Item>
          <Menu.Item color="red" icon={<IconTrash size="0.9rem" stroke={1.5} />}>
            Delete account
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
});

export default AccountMenu;