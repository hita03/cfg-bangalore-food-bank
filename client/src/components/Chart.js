import Chart from 'react-apexcharts';

function Charts() {
    let obj={
    
        margin: "90px"
    }
  return (
    <>
    <h3 style={obj}>Food Items left</h3>
    <Chart 
    type="bar"
    width="75%"
    height="30%"
    style={obj}

    series={[
      {
        data:[123,343,123,21,12,242,124,56,123,]
    }
  ]}

  options={{
    colors:['#008080'],
    theme:{mode:'light'},
    xaxis:{
      categories:["Rice","Wheat","Bread","Butter","Oil","Ginger","Flour","Dal","Maggi"]
    },
    title: {
        text: 'in Kg',
      }
  }
  }

  
    >

    </Chart>
    </>
  );
}

export default Charts;