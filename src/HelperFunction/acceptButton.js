export const failedButton = (
  employeeData,
  setEmployeeData,
  loggedInEmployeeData,
  setLoggedInEmployeeData
) => {
  const updatedEmployeeData = employeeData.map((employee) => {
    if (employee.id === loggedInEmployeeData.id) {
      return {
        ...employee,
        taskCount: {
          ...employee.taskCount,
          failed: (employee.taskCount.failed || 0) + 1,
        },
      };
    }
    return employee;
  });

  setEmployeeData(updatedEmployeeData);
  localStorage.setItem("employeeDataJ", JSON.stringify(updatedEmployeeData));

  const updateLoggedInEmployeeFailed = updatedEmployeeData.find((e) => e.id === loggedInEmployeeData.id);

  if (updateLoggedInEmployeeFailed) {
    const employeeWithRoleObj = {
      ...updateLoggedInEmployeeFailed,
      role: loggedInEmployeeData.role,
    };

    setLoggedInEmployeeData(employeeWithRoleObj);
    localStorage.setItem("loggedInUser", JSON.stringify(employeeWithRoleObj));
  }
};

export const completeButton = (
  employeeData,
  setEmployeeData,
  loggedInEmployeeData,
  setLoggedInEmployeeData) => {

  const updateCompleted = employeeData.map((employee) => {
    if(employee.id === loggedInEmployeeData.id) {
      return {
        ...employee,
        taskCount: {
          ...employee.taskCount,
          completed: (employee.taskCount.completed || 0) +1
        }
      }
    }
    return employee;
  });
  setEmployeeData(updateCompleted);
  localStorage.setItem("employeeDataJ", JSON.stringify(updateCompleted));

  const updateLoggedInEmployeeComplete = updateCompleted.find((e)=> e.id === loggedInEmployeeData.id);
  if (updateLoggedInEmployeeComplete) {
    const employeeWithRoleObjComplete = {
      ...updateLoggedInEmployeeComplete,
      "role": {
        ...loggedInEmployeeData.role,
      }
    }
    setLoggedInEmployeeData(employeeWithRoleObjComplete);
    localStorage.setItem("loggedInUser", JSON.stringify(employeeWithRoleObjComplete));
  }
};
