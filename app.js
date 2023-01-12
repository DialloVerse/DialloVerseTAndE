fetch("/api/tourism-services")
  .then((response) => response.json())
  .then((tourismServices) => {
    const tourismServicesList = document.getElementById("tourism-services");
    tourismServices.forEach((service) => {
      const listItem = document.createElement("li");
      listItem.textContent = service.name;
      tourismServicesList.appendChild(listItem);
    });
  });
fetch("/api/educational-resources")
  .then((response) => response.json())
  .then((educationalResources) => {
    const educationalResourcesList = document.getElementById(
      "educational-resources"
    );
    educationalResources.forEach((resource) => {
      const listItem = document.createElement("li");
      listItem.textContent = resource.name;
      educationalResourcesList.appendChild(listItem);
    });
  });
