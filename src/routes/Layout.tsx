import React from 'react';
import Header from '../components/Header/Header';

interface LayoutProps {
  title?: string;
  page?: React.ReactNode;
}

export default function Layout({ title, page }: LayoutProps) {
  return (
    <>
      <Header title={title} />
      <main>{page}</main>
    </>
  );
}
