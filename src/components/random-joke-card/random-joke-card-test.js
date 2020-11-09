import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('succesfully fetch data from API using async/await', () => {
    it('should load user data', async () => {
      const data = await fetch('https://api.chucknorris.io/jokes/random')
      expect(data).toBeDefined()
      expect(data.status).toEqual(200)
    })
})