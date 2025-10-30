import Header from './components/Header'
import Legenda from './components/legenda'
import Button from './components/Button/Button'
import Introsec from './components/Introsec'
import InteractiveMap from './components/Map'
import { BrowserRouter as Router } from 'react-router-dom'
// Важные глобальные стили Leaflet
import 'leaflet/dist/leaflet.css' 
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { ways, differences } from './data'
import TabsSection from './components/TabSec'


// Регистрируем необходимые компоненты Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);



// Компонент графика
function Chart() {
  const pieChartData = {
    
    datasets: [{
        data: [700, 905, 400, 600],
        backgroundColor: ["#FF954B", "#FFF944", "#5DF1AA", "#507CFF"],
        hoverBackgroundColor: ["#FF954B", "#FFF944", "#5DF1AA", "#507CFF"]
    }]
  };

  return (
    <div style={{ width: '350px', margin: '0 auto' }}>
      <Doughnut
        data={pieChartData}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Аварийность по жалабам",
            },
            legend: {
              display: true,
              position: "top"
            },
            tooltip:{
              //labels: ["Нет горячей воды", "Нет холодной воды", "Нет электричества", "Нет отопления"],
              callbacks: {
                label: function(context) {
                  const label = context.label || '';
                  const value = context.parsed || 0;
                  return `${label}: ${value.toLocaleString()} жалоб`;
                }
              }
            }
          }
        }}
      />
    </div>
  );
}

// Компонент с легендой
function LegendSection() {
  return (
    <div style={{ width: '350px', margin: '0 auto', padding: '15px'}}>
        <section >
        <h3>Сейчас в городе</h3>
        <ul>
          {ways.map(all => (
            <Legenda key={all.title} {...all} color={all.color} />
          ))}
        </ul>
      </section>
    </div>
    
  );
}
// Главный компонент
export default function App() {
  const [ contentType, setContentType ] = useState(null)
  

  console.log('App Component Render')

  function handleClick(type){
    console.log('button clicked', type)
    setContentType(type)
  }

  return (
    <div >
      <Router>
        <Header />
      </Router>
      
      <main>    
          

        <Introsec />  
        <h2>Карта отключений</h2>
        <InteractiveMap />  

        <h1 className="centered">Аварийность по жалобам</h1>
        <h3 className="centered" style={{ color: '#666'}}>
          Владивосток
        </h3>      

        <Chart />        
        
        <LegendSection />
        <TabsSection 
        contentType={contentType} 
        onTabClick={handleClick} 
        />

      </main>
      <Footer />
    </div>
  )
}