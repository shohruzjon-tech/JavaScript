angular.module("Angello",[])


angular
    .module("Angello",[])
    .factory("AngelloHelper",function(){})
    .controller("MainCtrl",function(AngelloModel){
        this.title = "Day Two"
        this.setCurrentStory = story => main.currentStory = story
        this.stories = AngelloModel.getStories()
        this.addNewStory = AngelloModel.addNewStory
    })
    .service("AngelloModel",function(){
        stories = [
            {
                title: 'First story',
                description: 'Our first story.',
                criteria: 'Criteria pending.',
                status: 'To Do',
                type: 'Feature',
                reporter: 'Lukas Ruebbelke',
                assignee: 'Brian Ford'
            },
            {
                title: 'Second story',
                description: 'Do something.',
                criteria: 'Criteria pending.',
                status: 'Back Log',
                type: 'Feature',
                reporter: 'Lukas Ruebbelke',
                assignee: 'Brian Ford'
            },
            {
                title: 'Another story',
                description: 'Just one more.',
                criteria: 'Criteria pending.',
                status: 'Code Review',
                type: 'Enhancement',
                reporter: 'Lukas Ruebbelke',
                assignee: 'Brian Ford'
            }
        ]
        this.addNewStory = ()=> stories
        .push({
            title: 'Story Title',
            description: 'Description.',
            criteria: 'Criteria pending.',
            status: 'To Do',
            type: 'Feature',
            reporter: 'Reporter',
            assignee: 'Assignee'
        })
        this.getStories = ()=> stories
    })
    .directive("story",function(){
        return{
            scope: true,
            replace: true,
            template:
                    `<div>
                        <h4>{{story.title}}</h4>
                        <p>{{story.description}}</p>
                    </div>`
        }
    })
    
    


