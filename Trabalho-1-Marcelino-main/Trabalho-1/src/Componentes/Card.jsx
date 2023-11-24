import React from 'react';
import './Card.css';

export default function Card({ produto }) {
    return (
        <div className="card">
            <h2>Nome: {produto.produto}</h2>
            <p>Preço: R$ {produto.preco}</p>
            <p>ID: {produto.id}</p>
        </div>
    );
}
