import React from 'react'
import styles from '../styles/Home.module.css' 

export default function Time() {
  const [time, setTime] = React.useState("Загрузка времени сервера...");
  React.useEffect(()=>{
    fetch('api/getServerTime').then(data=>data.text()).then(data=>setTime(data));
  },[]);
  return (
    <div className={styles.container}>
      <p>{time}</p>
    </div>
  )
}
