
import React from 'react'

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

const BarChart =(props) => {
  const userData = props.data
  const userLabel = props.label
  const data = {
    // labels: ['Mon','Tue','Wed'],
    labels: userData.map(item => item.Region),
    datasets: [
      {
        label: userLabel,
        // data:[3,6,9],
        data: userData.map(item => item.count),
        backgroundColor: '#FBB040',
        borderColor: '#FBB040',
        borderWidth: 1,
      }
    ]
  }
  const options = {};

  return(
    <div>
      <Bar id={'BarChart'} style={{display:'none'}}data={data} options={options}/>
    </div>
  ) 
}
export default BarChart;