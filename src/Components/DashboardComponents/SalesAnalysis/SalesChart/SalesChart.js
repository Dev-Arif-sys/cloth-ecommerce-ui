import React from 'react';
import { Bar } from 'react-chartjs-2';


const SalesChart = () => {
    return (
        <div>
            <div><h5>Sale Analysis</h5></div>
            <div>
              <Bar
              height={400}
              width={600}
              data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor:"rgb(139, 66, 207)",
                    borderWidth: 1
                    
                },
                {
                    label:'quantity',
                    data:[30,40,200,400,100,140],
                    backgroundColor:"red"
                }
                

            ]
            }

            
              }
              options={{
                  maintainAspectRatio:false,
                  scales:{
                      yAxes:[
                          {
                              ticks:{
                                  beginAtZero:true
                              }
                          }
                      ]
                  }
              }}
              />
            </div>
            
        </div>
    );
};

export default SalesChart;