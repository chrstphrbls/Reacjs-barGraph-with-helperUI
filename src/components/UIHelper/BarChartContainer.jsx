import BarChart from '../BarChart/BarChart'
import ShowGraphButton from '../HideBarGraph/ShowBarGraph.Button';

const BarChartContainer = (props) => {
  return (
    <div>
    <BarChart data={props.data} label={props.label} />
    <ShowGraphButton />
    </div>

  )
}
export default BarChartContainer;