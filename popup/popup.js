
// Fetch all rapers data
async function fetch_rapper_data() {

     try {
          const data = await fetchContent('../json/rappers.json');
          const jsonData = JSON.parse(data);

          const tableBody = document.querySelector("#table-body");

          // Parse rapper data
          for (const rapper of jsonData) {
               let socials = [];

               for (const social of rapper.socials) {
                    if (social.url == null)
                         continue;

                    logo_url = chrome.runtime.getURL(`../assets/socials/${social.type}.png`);
                    socials += `<a class="logo" href="${social.url}" target="_blank"><img src="${logo_url}" />`;
               }

               // Add rapper into table
               tableBody.innerHTML += `<tr class="my-3"><th class="fs-medium">${rapper.id}</th><td class="fs-medium">${rapper.name_fa}<br>${rapper.name_en}</td><td class="text-right mt-1">${socials}</td></tr>`;
          }
     } catch (error) {
          console.error('Error fetching or parsing JSON:', error);
     }

}

// Fetch content of json file
async function fetchContent(file_path) {
     try {
          const response = await fetch(file_path);
          if (!response.ok) {
               throw new Error('Network response was not ok');
          }
          return await response.text();
     } catch (error) {
          throw error;
     }
}

// Usage
fetch_rapper_data();
