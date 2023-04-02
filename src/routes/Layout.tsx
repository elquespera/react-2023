import React from 'react';
import Header from '../components/Header/Header';

interface LayoutProps {
  title?: string;
  testId?: string;
  page?: React.ReactNode;
}

export default class Layout extends React.Component<LayoutProps> {
  render() {
    return (
      <>
        <Header title={this.props.title} />
        <main data-testid={this.props.testId}>{this.props.page}</main>
      </>
    );
  }
}
