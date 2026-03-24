function openPopup(project){

let title = document.getElementById("popup-title");

let desc = document.getElementById("popup-desc");

if(project==="covid"){

title.innerText="COVID-19 Data Analysis";

desc.innerText="Developed a Python program to automate COVID data processing, clean datasets, and generate visual insights using Pandas, NumPy, Matplotlib and Seaborn.";

}



if(project==="visual"){

title.innerText="Real World Dataset Visualization";

desc.innerText="Processed 10k+ records using Excel and Power BI to uncover correlations between product features and customer satisfaction.";

}



if(project==="sdg"){

title.innerText="Sustainable Development Goals Dashboard";

desc.innerText="Built an interactive Excel dashboard with pivot tables, slicers and charts to analyze 50k+ data rows.";

}



document.getElementById("popup").style.display="block";

}



function closePopup(){

document.getElementById("popup").style.display="none";

}