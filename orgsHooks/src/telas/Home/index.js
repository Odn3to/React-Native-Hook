import React from 'react';
import Produtores from '../componentes/Produtores.js';
import Topo from '../componentes/Topo.js';

export default function Home() {
  return <Produtores topo={Topo} />
}
