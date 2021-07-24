import { Component, OnInit } from '@angular/core';

//import * as $ from 'jquery';
declare let d3: any;
declare let $: any;

@Component({
  selector: 'app-gitstyle-heatmap',
  templateUrl: './gitstyle-heatmap.component.html',
  styleUrls: ['./gitstyle-heatmap.component.css'],
})
export class GitstyleHeatmapComponent implements OnInit {
  CELL_SIZE = 14;
  NUMBER_OF_COLORS = 4;
  constructor() {}

  ngOnInit() {
    this.createHeatMap(null, null, null);
  }

  /**
   * Render the heatmap and any other svg elements
   * @param  {Object} data
   * @param  {Date} startYear
   * @param  {Date} endYear
   */
  createHeatMap(data: any, startYear: any, endYear: any) {
    data = {
      startDate: '2015-01-12T13:43:08.000Z',
      dates: {
        '2021-01-08': { count: 27000, posted: 1 },
        '2020-12-22': { count: 1, posted: 1 },
        '2020-11-29': { count: 2, posted: 2 },
        '2020-09-18': { count: 2, posted: 2 },
        '2019-10-27': { count: 1, posted: 1 },
        '2019-10-25': { count: 1, posted: 1 },
        '2019-10-16': { count: 1, posted: 1 },
        '2019-10-13': { count: 1, posted: 1 },
        '2019-10-03': { count: 1, posted: 1 },
        '2019-08-19': { count: 1, posted: 1 },
        '2019-08-14': { count: 2, posted: 1, comments: 1 },
        '2019-08-15': { count: 2, posted: 1, comments: 1 },
        '2019-07-15': { count: 1, posted: 1 },
        '2019-07-02': { count: 1, posted: 1 },
        '2019-05-06': { count: 1, posted: 1 },
        '2019-02-04': { count: 1, posted: 1 },
        '2019-01-31': { count: 3, posted: 1, comments: 2 },
        '2019-01-29': { count: 1, posted: 1 },
        '2019-01-19': { count: 1, posted: 1 },
        '2019-01-18': { count: 2, posted: 2 },
        '2017-02-06': { count: 2, posted: 1, comments: 1 },
        '2017-01-27': { count: 1, posted: 1 },
        '2016-12-29': { count: 2, posted: 1, comments: 1 },
        '2016-12-28': { count: 2, posted: 2 },
        '2016-12-26': { count: 1, posted: 1 },
        '2016-12-25': { count: 1, posted: 1 },
        '2016-12-12': { count: 2, posted: 1, comments: 1 },
        '2016-08-12': { count: 29000, posted: 1 },
        '2016-07-31': { count: 27000, posted: 1 },
        '2016-07-03': { count: 4, posted: 2, comments: 2 },
        '2016-06-26': { count: 2, posted: 1, comments: 1 },
        '2016-04-25': { count: 1, posted: 1 },
        '2016-03-13': { count: 14, posted: 3, comments: 11 },
        '2015-12-27': { count: 1, posted: 1 },
        '2015-12-23': { count: 1, posted: 1 },
        '2015-12-19': { count: 27000, posted: 1 },
        '2015-12-09': { count: 1, posted: 1 },
        '2015-12-06': { count: 1, posted: 1 },
        '2015-11-20': { count: 1, posted: 1 },
        '2015-11-12': { count: 1, posted: 1 },
        '2015-11-10': { count: 1, posted: 1 },
        '2015-11-09': { count: 2, posted: 2 },
        '2015-10-22': { count: 26000, posted: 1 },
        '2015-10-18': { count: 28800, posted: 1 },
        '2015-09-30': { count: 1, posted: 1 },
        '2015-09-28': { count: 1, posted: 1 },
        '2015-09-20': { count: 1, posted: 1 },
        '2015-09-15': { count: 1, posted: 1 },
        '2015-09-13': { count: 1, posted: 1 },
        '2015-09-02': { count: 1, posted: 1 },
        '2015-08-27': { count: 1, posted: 1 },
        '2015-06-28': { count: 1, posted: 1 },
        '2015-05-17': { count: 1, posted: 1 },
        '2015-04-21': { count: 1, posted: 1 },
        '2015-02-26': { count: 1, posted: 1 },
        '2015-02-03': { count: 1, posted: 1 },
        '2015-02-02': { count: 1, posted: 1 },
        '2015-01-17': { count: 1, posted: 1 },
        '2015-01-14': { count: 2, posted: 2 },
        '2015-01-12': { count: 1, posted: 1 },
        '2021-07-01': { count: 1, comments: 1 },
        '2021-06-19': { count: 2, comments: 2 },
        '2021-06-13': { count: 1, comments: 1 },
        '2021-05-02': { count: 2, comments: 2 },
        '2021-04-30': { count: 1, comments: 1 },
        '2021-04-11': { count: 1, comments: 1 },
        '2021-04-10': { count: 1, comments: 1 },
        '2021-04-08': { count: 3, comments: 3 },
        '2021-01-21': { count: 3, comments: 3 },
        '2021-01-19': { count: 1, comments: 1 },
        '2021-01-18': { count: 2, comments: 2 },
        '2020-11-17': { count: 2, comments: 2 },
        '2020-11-04': { count: 1, comments: 1 },
        '2020-09-22': { count: 1, comments: 1 },
        '2020-09-17': { count: 1, comments: 1 },
        '2020-05-05': { count: 1, comments: 1 },
        '2019-11-20': { count: 1, comments: 1 },
        '2018-11-28': { count: 1, comments: 1 },
        '2018-11-13': { count: 1, comments: 1 },
        '2018-10-20': { count: 1, comments: 1 },
        '2018-01-26': { count: 2, comments: 2 },
        '2017-12-24': { count: 1, comments: 1 },
        '2017-11-09': { count: 1, comments: 1 },
        '2017-11-02': { count: 1, comments: 1 },
        '2017-11-01': { count: 1, comments: 1 },
        '2017-10-31': { count: 3, comments: 3 },
        '2017-10-25': { count: 4, comments: 4 },
        '2017-10-23': { count: 1, comments: 1 },
        '2017-10-16': { count: 4, comments: 4 },
        '2017-08-11': { count: 1, comments: 1 },
        '2017-07-18': { count: 2, comments: 2 },
        '2017-07-10': { count: 2, comments: 2 },
        '2017-05-27': { count: 1, comments: 1 },
        '2017-05-13': { count: 1, comments: 1 },
        '2017-05-08': { count: 1, comments: 1 },
        '2017-05-05': { count: 1, comments: 1 },
        '2017-05-04': { count: 1, comments: 1 },
        '2017-04-05': { count: 1, comments: 1 },
        '2017-02-04': { count: 1, comments: 1 },
        '2016-12-19': { count: 1, comments: 1 },
        '2016-11-25': { count: 1, comments: 1 },
        '2016-10-18': { count: 1, comments: 1 },
        '2016-10-03': { count: 1, comments: 1 },
        '2016-09-16': { count: 1, comments: 1 },
        '2016-08-15': { count: 1, comments: 1 },
        '2016-07-23': { count: 1, comments: 1 },
        '2016-07-19': { count: 1, comments: 1 },
        '2016-07-10': { count: 1, comments: 1 },
        '2016-06-14': { count: 1, comments: 1 },
        '2016-05-20': { count: 1, comments: 1 },
        '2016-05-12': { count: 1, comments: 1 },
        '2016-05-09': { count: 1, comments: 1 },
        '2016-04-27': { count: 2, comments: 2 },
        '2016-04-02': { count: 1, comments: 1 },
        '2016-03-22': { count: 1, comments: 1 },
        '2016-03-19': { count: 1, comments: 1 },
        '2016-03-17': { count: 3, comments: 3 },
      },
      maxCount: 28800,
    };
    startYear = 2016;
    endYear = 2017;

    var width = 900;
    var height = 110;
    var dx = 35;
    var gridClass = 'js-date-grid day';
    var formatColor = d3
      .scaleQuantize()
      .domain([0, data.maxCount])
      .range(d3.range(this.NUMBER_OF_COLORS).map((d: any) => `color${d}`));

    // First remove previously added svg and then add new one
    d3.select('svg').remove();

    var heatmapSvg = d3
      .select('.js-heatmap')
      .selectAll('svg.heatmap')
      .enter()
      .append('svg')
      .data(d3.range(startYear, endYear))
      .enter()
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('class', 'color');

    // Add a grid for each day between the date range.
    var dates = Object.keys(data.dates);
    var rect = heatmapSvg.append('g').attr('transform', `translate(${dx},0)`);

    // Add year label.
    rect
      .append('text')
      .attr('transform', `translate(-9,${this.CELL_SIZE * 3.5})rotate(-90)`)
      .style('text-anchor', 'middle')
      .text((d: any) => d);

    rect
      .selectAll('.day')
      // The heatmap will contain all the days in that year.
      .data((d: any) => d3.timeDays(new Date(d, 0, 1), new Date(d + 1, 0, 1)))
      .enter()
      .append('rect')
      .attr('class', gridClass)
      .attr('width', this.CELL_SIZE)
      .attr('height', this.CELL_SIZE)
      .attr('x', (d: any) => d3.timeFormat('%U')(d) * this.CELL_SIZE)
      .attr('y', (d: any) => d.getDay() * this.CELL_SIZE)
      .attr('data-toggle', 'tooltip')
      .datum(d3.timeFormat('%Y-%m-%d'))
      // Add the grid data as a title attribute to render as a tooltip.
      .attr('title', (d: any) => {
        var countData = data.dates[d];
        var date = d3.timeFormat('%b %d, %Y')(new Date(d));
        if (!countData || !countData.count) return `No posts on ${date}`;
        else if (countData.count === 1) return `1 post on ${date}`;
        else return `${countData.count} posts on ${date}`;
      })
      .attr('date', (d: any) => d)
      //Add bootstrap's tooltip event listener.
      .call(() =>
        $('[data-toggle="tooltip"]').tooltip({
          container: 'body',
          placement: 'bottom',
          position: { my: 'bottom' },
        })
      )
      // Add the colors to the grids.
      .filter((d: any) => dates.indexOf(d) > -1)
      .attr(
        'class',
        (d: any) => `${gridClass} ${formatColor(data.dates[d].count)}`
      );

    //First remove previously added svg and then add new one
    d3.select('.js-months > svg').remove();

    // Render x axis to show months
    d3.select('.js-months')
      .selectAll('svg.months')
      .enter()
      .append('svg')
      .data([1])
      .enter()
      .append('svg')
      .attr('width', 800)
      .attr('height', 20)
      .append('g')
      .attr('transform', 'translate(0,10)')
      .selectAll('.month')
      .data(() => d3.range(12))
      .enter()
      .append('text')
      .attr('x', (d: any) => d * (4.5 * this.CELL_SIZE) + dx)
      .text((d: any) => d3.timeFormat('%b')(new Date(0, d + 1, 0)));

    //First remove previously added svg and then add new one
    d3.select('.js-legend > svg').remove();

    // Render the grid color legend.
    var legendSvg = d3
      .select('.js-legend')
      .selectAll('svg.legend')
      .enter()
      .append('svg')
      .data([1])
      .enter()
      .append('svg')
      .attr('width', 800)
      .attr('height', 20)
      .append('g')
      .attr('transform', 'translate(644,0)')
      .selectAll('.legend-grid')
      .data(() => d3.range(5))
      .enter()
      .append('rect')
      .attr('width', this.CELL_SIZE)
      .attr('height', this.CELL_SIZE)
      .attr('x', (d: any) => d * this.CELL_SIZE + dx)
      .attr('class', (d: any) => `day color${d - 1}`);
  }
}
