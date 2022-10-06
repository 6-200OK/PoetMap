import { flyToPoint, addModel } from '../utils/mapUtils'

export default config => selection => {
  let {
    timeScale,
    onEventClick
  } = config

  let events = selection.selectAll('g.event').data(selection.data()[0][0])

  let g = events
    .enter()
    .append('g')
    .classed('event', true)
    .attr('transform', d => `translate(${timeScale(d.start)} ${d.position * 22})`)
    .on('click', onEventClick)

  g.append('rect')
    .attr('width', d => {
      // console.log(timeScale(d.end));
      return d.end ? Math.abs(timeScale(d.end) - timeScale(d.start)) : 10
    })
    .attr('height', 20)
    .attr('fill', 'rgb(135, 206, 250)')
    .attr('ry', 6)

  g.append('text')
    .attr('dy', '1em')
    .style('pointer-events', 'none')
    .text(d => d.name + d.year)

    const click = (lon, lat) => {
      // console.log(`(${lon},${lat})`);
      flyToPoint(lon, lat)
      addModel(lon, lat)
    }

  events
    .attr('transform', d => `translate(${timeScale(d.start)} ${d.position * 22})`)
    .selectAll('rect')
    .attr('width', d => d.end ? timeScale(d.end) - timeScale(d.start) : 10)
    .on('click', d => click(d.target.__data__.lon, d.target.__data__.lat))

}