import React from 'react';
import { shallow, mount } from 'enzyme';

jest.mock('../../Spinner', () => jest.fn(() => 'spinner'));
jest.mock('../../../redux/actionCreators/loadUserInfo', () => jest.fn(() => Promise.resolve()));

import { mapStateToProps, mapDispatchToProps } from './index';
import Component from './userInfoPure';

describe('UserInfo', () => {
  describe('connect', () => {
    const store = {
      userInfoSubstore: {
        userInfo: 'userInfo',
        isLoading: 'isLoading',
        error: 'error',
      },
    };

    it('mapStateToProps', () => {
      expect(mapStateToProps(store)).toEqual({
        userInfo: 'userInfo',
        isLoading: 'isLoading',
        error: 'error',
      });
    });

    // it('mapDispatchToProps', () => {
    //   const dispatch = jest.fn();

    //   const { loadUserInfo } = mapDispatchToProps(dispatch);

    //   loadUserInfo()
    //   expect(dispatch).toBeCalledWith({});
    // });
  });

  describe('component', () => {
    const userInfo = { location: 'Караганда', age: '42', userName: 'Порутчик' }

    it('renders userInfo', () => {
      const component = shallow(
        <Component
          userInfo={userInfo}
          loadUserInfo={() => {}}
        />
      );
      expect(component.text()).toEqual('Имя пользователя: ПорутчикВозраст: 42 летИз Караганда')
    });

    it('renders spinner если isLoading', () => {
      const component = mount(<Component isLoading={true} userInfo={userInfo} loadUserInfo={() => {}} />);
      expect(component.text()).toEqual('spinner')
    });
  });
});
