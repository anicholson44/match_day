import React from 'react';

class Spinner extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { numberOfPeriods: 0 };
    this.scheduleTextUpdate = this.scheduleTextUpdate.bind(this);
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  scheduleTextUpdate() {
    setTimeout(() => {
      const numberOfPeriods = this.props.active ? (this.state.numberOfPeriods + 1) % 4 : 0;
      if (!this.unmounted) { this.setState({ numberOfPeriods }) }
    }, 500);
  }

  render() {
    const { active } = this.props;
    const { numberOfPeriods } = this.state;
    const text = `Loading${Array(numberOfPeriods).fill('.').join('')}`;
    this.scheduleTextUpdate();
    return active ? (
      <div className='spinner-container'>
        <div className='spinner' />
        <div className='text'>
          {text}
        </div>
      </div>
    ) : null;
  }
}

export default Spinner;
