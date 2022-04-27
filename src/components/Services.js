import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, dolorum?',
      },
      {
        icon: <FaHiking />,
        title: 'endless Hiking',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, dolorum?',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free shuttle',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, dolorum?',
      },
      {
        icon: <FaBeer />,
        title: 'Strong as beer',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, dolorum?',
      },
    ],
  };
  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, idx) => {
            return (
              <article key={idx} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
