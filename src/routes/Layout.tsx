import React from 'react';
import Header from '../components/Header/Header';

interface LayoutProps {
  title?: string;
  testId?: string;
  page?: React.ReactNode;
}

export default function Layout({ title, testId, page }: LayoutProps) {
  return (
    <>
      <Header title={title} />
      <main data-testid={testId}>{page}</main>
    </>
  );
}
