import React from 'react'

const DataTable = (props) => {
  console.log("first", props.tableData)

  return (
    <>
      <div style={{ alignItems: 'center' }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sl No.</th>
              <th scope="col">Name</th>
              <th scope="col">Mother</th>
              <th scope="col">email</th>
            </tr>
          </thead>
          <tbody>
            {
              props?.tableData.map((data, index) => {
                return (
                  <tr>
                    <th scope="row">{index+1}</th>
                    <td>{data.Name}</td>
                    <td>{data.Mother}</td>
                    <td>{data.Email}</td>
                  </tr>
                )
              })
            }


          </tbody>
        </table>


      </div>
    </>
  )
}

export default DataTable