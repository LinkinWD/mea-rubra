import * as React from 'react';
import { Header } from '../components/Header';
import Main from '../components/Main';

export interface IKotiProps {
}

export default function Koti (props: IKotiProps) {
  return (
    <div>
      <Header/>
      <Main/>
    </div>
  );
}
