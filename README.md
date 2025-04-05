In this project, let's build a **Simple Todos** app by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/simple-todos-output.gif" alt="simple todos output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/simple-todos-sm-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/simple-todos-lg-output-v2.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially, the list of given todos should be displayed with a delete button for each todo
- When **Delete** button of a todo is clicked, then the respective todo should be deleted
- The `SimpleTodos` will consist of the `initialTodosList`. It consists of a list of todo objects with the following properties in each todo object

  |  Key  | Data Type |
  | :---: | :-------: |
  |  id   |  Number   |
  | title |  String   |

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/simple-todos-component-structure.png" alt="simple todos component structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/SimpleTodo/index.js`
- `src/components/SimpleTodo/index.css`
- `src/components/TodoItem/index.js`
- `src/components/TodoItem/index.css`
</details>

### Quick Tips

<details>
<summary>Click to view</summary>
<br>

- You can use the `cursor` CSS property to specify the mouse cursor to be displayed when pointing over an element

  ```
    cursor: pointer;
  ```

  <br/>
   <img src="https://assets.ccbp.in/frontend/content/react-js/cursor-pointer-img.png" alt="cursor pointer" style="width:100px" />

- You can use the below `outline` CSS property for buttons and input elements to remove the highlighting when the elements are clicked

  ```
    outline: none;
  ```

</details>

### Resources

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #ffc2a0; width: 150px; padding: 10px; color: black">Hex: #ffc2a0</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #ff8542; width: 150px; padding: 10px; color: white">Hex: #ff8542</div>
<div style="background-color: #000000; width: 150px; padding: 10px; color: white">Hex: #000000</div>
<div style="background-color: #ff0b37; width: 150px; padding: 10px; color: white">Hex: #ff0b37</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.


###Enhancement of Simple Todos.....

The goal of this enhancement project is to understand the existing <a href="https://learning.ccbp.in/question/b2a98dfd-cc40-44b3-978c-d66cb75f49c3" target="_blank_">Simple Todos</a> code, and add the given functionalities within the existing <a href="https://learning.ccbp.in/question/b2a98dfd-cc40-44b3-978c-d66cb75f49c3" target="_blank_">Simple Todos</a> code.

Your existing <a href="https://learning.ccbp.in/question/b2a98dfd-cc40-44b3-978c-d66cb75f49c3" target="_blank_">Simple Todos</a> app, which you have developed, allows users to view a list of todos, and enables them to delete a todo.

### Enhancement Functionalities

<details>
<summary>Functionality to be added</summary>
  - To add new todos, include a text input field and an `Add` button at the top of the todo list.
  - To edit the title of a todo, place an `Edit` button next to each todo item. This button changes to a `Save` button when clicked.
  - To save the updated title, click the `Save` button, which will then changes back to an `Edit` button.
  - To mark tasks as complete, add a checkbox at the beginning of each todo item. This checkbox, when checked, strikes out the corresponding todo item.
  - Implement a functionality to add multiple todos with the same title at once, by entering the title and number of todos, separated by a space, in the input field.
  - Ensure your application maintains good CSS styling.
</details>

### Setup Instructions

<details>
<summary>Follow these steps before starting to code for this project. (**Important**)</summary>

- After setting up this project delete the `README.md` file in the CCBP IDE.
- Clone the existing <a href="https://learning.ccbp.in/question/b2a98dfd-cc40-44b3-978c-d66cb75f49c3" target="_blank_">Simple Todos</a> code from your GitHub account to add new functionalities to it.
  - If the existing <a href="https://learning.ccbp.in/question/b2a98dfd-cc40-44b3-978c-d66cb75f49c3" target="_blank_">Simple Todos</a> code is not available in your git, push your code to git.
    - <a href="https://learning.ccbp.in/3da6f1a6-0892/course?c_id=ade6e642-cd5c-4896-9edd-3f06d3dc2069&s_id=49896a46-f484-4b42-b459-2626f77e6796&t_id=9f27b553-4bbe-400f-9025-9044f79acda0" target="_blank_">Click here to learn how to push your code to git</a>
  - Once the code is pushed to git, clone it into this project using the below command.

```cmd
git clone {git repository URL} /home/workspace/reactjs/coding-practices/enhancementOfSimpleTodos
```

<MultiLineNote>
In the above command, replace this `{git repository URL}` with your actual Git URL.
</MultiLineNote>
- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

<MultiLineNote>

- Cloning the existing <a href="https://learning.ccbp.in/question/b2a98dfd-cc40-44b3-978c-d66cb75f49c3" target="_blank_">Simple Todos</a> repo is mandatory, as test cases are added for both the existing Simple Todos App and the new functionality.
- These projects are introduced to help you prepare well for similar questions asked during interviews. </MultiLineNote>

#### Submission Form:

<center>Click the below button and submit your git URL and published URL of the current coding assignment</center>
<br>
<a href="https://forms.ccbp.in/todos-enhancement-project-submission-form" target="_blank_">
  <center><button style="color: #fff; border: none; cursor: pointer; width: 218px; height: 34px; background-color: rgb(22, 101, 216); border-radius: 5.4px; box-shadow: rgb(0 0 0 / 36%) 0px 2px 4px 0px;font-family: Inter;font-size: 14px;color: rgb(255, 255, 255);font-weight: 500;letter-spacing: 0.5px;text-transform: uppercase;">
    SUBMIT
  </button>
  </center>
</a>

<br/>
<center>**Follow the clean code guidelines**</center>
