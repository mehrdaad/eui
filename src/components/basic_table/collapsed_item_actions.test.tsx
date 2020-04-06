import React, { FocusEvent } from 'react';
import { render, shallow } from 'enzyme';
import { CollapsedItemActions } from './collapsed_item_actions';
import { Action } from './action_types';

describe('CollapsedItemActions', () => {
  test('render', () => {
    const props = {
      actions: [
        {
          name: 'default1',
          description: 'default 1',
          onClick: () => {},
        },
        {
          name: 'custom1',
          description: 'custom 1',
          render: () => <div />,
        },
      ],
      itemId: 'id',
      item: { id: 'xyz' },
      actionEnabled: (_: Action<{ id: string }>) => true,
      onFocus: (_: FocusEvent) => {},
      onBlur: () => {},
    };

    const component = render(<CollapsedItemActions {...props} />);

    expect(component).toMatchSnapshot();
  });

  test('render with href and _target provided', () => {
    const props = {
      actions: [
        {
          name: 'default1',
          description: 'default 1',
          onClick: () => {},
        },
        {
          name: 'custom1',
          description: 'custom 1',
          render: () => <div />,
        },
        {
          name: 'default2',
          description: 'default 2',
          href: 'https://www.elastic.co/',
          target: '_blank',
        },
      ],
      itemId: 'id',
      item: { id: 'xyz' },
      actionEnabled: (_: Action<{ id: string }>) => true,
      onFocus: (_: FocusEvent) => {},
      onBlur: () => {},
    };

    const component = shallow(<CollapsedItemActions {...props} />);
    component.setState({ popoverOpen: true });

    expect(component).toMatchSnapshot();
  });
});
