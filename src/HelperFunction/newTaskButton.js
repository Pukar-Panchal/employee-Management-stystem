export const acceptButton = (
  employeeData,
  setEmployeeData,
  loggedInEmployeeData,
  setLoggedInEmployeeData
) => {
  const updateEmployeeActive = employeeData.map((employee) => {
    if (employee.id === loggedInEmployeeData.id) {
      return {
        ...employee,
        taskCount: {
          ...employee.taskCount,
          active: (employee.taskCount.active || 0) + 1,
        },
      };
    }
    return employee;
  });
  setEmployeeData(updateEmployeeActive);
  localStorage.setItem("employeeDataJ", JSON.stringify(updateEmployeeActive));

  const updateLoggedInEmployeeActive = updateEmployeeActive.find((e) => e.id === loggedInEmployeeData.id);

  if (updateLoggedInEmployeeActive) {
    const updatedLoggedInEmploye = {
      ...updateLoggedInEmployeeActive,
      role: loggedInEmployeeData.role,
    };
    setLoggedInEmployeeData(updatedLoggedInEmploye),
    localStorage.setItem("loggedInUser",JSON.stringify(updatedLoggedInEmploye));
    console.log(updatedLoggedInEmploye);
  }
};
