import assert from 'assert';
import React from 'react';
import {shallow} from 'enzyme';
import THead from '../../src/Table/js/THead';

describe('THead', () => {
  it('supports additional classNames', () => {
    const tree = shallow(render({className: 'myClass'}));
    assert.equal(tree.hasClass('myClass'), true);
  });

  it('supports additional properties', () => {
    const tree = shallow(render({foo: true}));
    assert.equal(tree.prop('foo'), true);
  });

  it('supports children', () => {
    const tree = shallow(render({children: 'Foo'}));
    assert.equal(tree.children().node, 'Foo');
  });
});

const render = ({children, ...otherProps}) => (
  <THead {...otherProps}>{children}</THead>
);
