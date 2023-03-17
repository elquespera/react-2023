import React from 'react';
import Header from '../components/Header/Header';

interface LayoutProps {
  title?: string;
  page?: React.ReactNode;
}

export default class Layout extends React.Component<LayoutProps> {
  render() {
    return (
      <>
        <Header title={this.props.title} />
        <main>{this.props.page}</main>
      </>
    );
  }
}
