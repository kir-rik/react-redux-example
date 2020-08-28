import React from 'react';
import { shallow, mount } from 'enzyme';
import Spinner from '../../Spinner';

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
    it('renders spinner если isLoading', () => {
      const component = shallow(<Component isLoading={true} userInfo={{}} loadUserInfo={() => {}} />);
      console.log('_______________', component.find(<main />));
      console.log('_______________', component.find(<Spinner />));
    });

    it('renders userInfo', () => {
      const component = shallow(
        <Component
          userInfo={{ location: 'Караганда', age: 42, userName: 'Порутчик' }}
          loadUserInfo={() => {}}
        />
      );
      console.log('_______________', component.text());
      expect(component.text()).toEqual('Имя пользователя: ПорутчикВозраст: 42 летИз Караганда')
    });
  });
});
