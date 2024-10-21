const experiences = [
    {
        "workedTime": "2022 - 2023",
        "name": "Testing Company",
        "role": "Quality Assurance Analyst",
        "description": "I worked as Software Automator, automating softwares in Android, IOS and Web platforms.",
        "tags": [
            "Javascript",
            "HTML",
            "CSS"
        ]
    },
    {
        "workedTime": "2022 - 2023",
        "name": "Testing Company",
        "role": "Quality Assurance Analyst",
        "description": "I worked as Software Automator, automating softwares in Android, IOS and Web platforms.",
        "tags": [
            "Javascript",
            "HTML",
            "CSS"
        ]
    },
    {
        "workedTime": "2022 - 2023",
        "name": "Testing Company",
        "role": "Quality Assurance Analyst",
        "description": "I worked as Software Automator, automating softwares in Android, IOS and Web platforms.",
        "tags": [
            "Javascript",
            "HTML",
            "CSS"
        ]
    },
    {
        "workedTime": "2022 - 2023",
        "name": "Testing Company",
        "role": "Quality Assurance Analyst",
        "description": "I worked as Software Automator, automating softwares in Android, IOS and Web platforms.",
        "tags": [
            "Javascript",
            "HTML",
            "CSS"
        ]
    }
];

const populateExperiences = () =>{
    const list = document.getElementById('experience-list');

    for(var i=0;i <experiences.length; i++){
        const div = document.createElement('div');
        div.classList.add('row')

        const span = document.createElement('strong');
        span.appendChild(document.createTextNode(experiences[i].workedTime));
        span.id = 'workedTime';
        div.append(span);

        const informationDiv = document.createElement('div');
        informationDiv.classList.add('column');
        informationDiv.classList.add('experience-information');

        const title = document.createElement('h3');
        title.appendChild(document.createTextNode(experiences[i].name));
        informationDiv.append(title);

        const role = document.createElement('h4');
        role.appendChild(document.createTextNode(experiences[i].role));
        informationDiv.append(role);

        const desc = document.createElement('p');
        desc.appendChild(document.createTextNode(experiences[i].description));
        informationDiv.append(desc);

        const tags = document.createElement('div');
        tags.classList.add('tags');

        const tagsUl = document.createElement('ul');
        tagsUl.classList.add('row');

        for(var j=0; j <experiences[i].tags.length; j++){
            var tag = document.createElement('li');
            tag.appendChild(document.createTextNode(experiences[i].tags[j]));

            tagsUl.append(tag);

            tag = '';
        }

        tags.append(tagsUl);
        informationDiv.append(tags);


        div.append(informationDiv);
        list.append(div);
    }
}

populateExperiences();
