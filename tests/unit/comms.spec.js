import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import '@/../public/comms/js/config-settings';
import '@/../public/comms/js/config-flow';
import '@/../public/comms/i18n/lang-en';
import DefaultPage from '@/views/DefaultPage.vue';

describe('Comms App on Desktop', () => {
  test('renders home page on load', () => {
    const wrapper = mount(DefaultPage, {
      global: {
        mocks: {
          $t: (msg) => msg,
          $n: (msg) => msg,
          $d: (msg) => msg,
        },
        directives: {
          clickoutside: () => {}, // Bar matches v-bar
        },
      },
    });
    expect(wrapper.find('h1').text()).toContain('message.hero_text');
  });

  test('renders account page when authenticated', () => {
    window.mainconfig.isAuthenticated = true;
    window.mainconfig.userId = 0;
    const wrapper = mount(DefaultPage, {
      global: {
        mocks: {
          $t: (msg) => msg,
          $n: (msg) => msg,
          $d: (msg) => msg,
        },
        directives: {
          clickoutside: () => {}, // Bar matches v-bar
        },
      },
    });
    expect(wrapper.find('h1').text()).toContain('message.hello');
  });
});

describe('Comms App on Mobile', () => {
  test('renders home page on load', () => {
    window.mainconfig.isMobilePhone = true;
    window.mainconfig.isAuthenticated = false;
    window.mainconfig.userId = -1;
    const wrapper = mount(DefaultPage, {
      global: {
        mocks: {
          $t: (msg) => msg,
          $n: (msg) => msg,
          $d: (msg) => msg,
        },
        directives: {
          clickoutside: () => {}, // Bar matches v-bar
        },
      },
    });
    expect(wrapper.find('h1').text()).toContain(
      'message.phone_home_page_title',
    );
  });
});
