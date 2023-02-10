 import { Options } from "highcharts";

export const areaChartOptions: Options = {
  chart: {
    styledMode: false,
  },
  plotOptions: {
    series: {
      marker: {
        enabled: true,
      }
    }
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  title: {
    text: 'Area Chart'
  },
  yAxis: {
    visible: true,
  },
  xAxis: {
    visible: true,
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
  },
  defs: {
    gradient0: {
      tagName: 'linearGradient',
      id: 'gradient-0',
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 1,
      children: [
        {
          tagName: 'stop',
          offset: 0
        },
        {
          tagName: 'stop',
          offset: 1
        }
      ]
    }
  } as any,
  series: [
    {
      color: '#506ef9',
      type: 'areaspline',
      keys: ['y', 'selected'],
      data: [
        [29.9, false],
        [71.5, false],
        [106, false],
        [144.5, false],
        [176.0, false],
        [135.6, false],
        [148.5, false],
        [216.4, false],
        [194.1, false],
        [95.6, false],
        [54.4, false],
      ],
    },
  ],
};
