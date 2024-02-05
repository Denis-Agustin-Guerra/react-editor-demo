// import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// function App() {
//   const [quillContent, setQuillContent] = useState<string>('');

//   const handleQuillChange = (value: string) => {
//     setQuillContent(value);
//   };

//   return (
//     <div>
//       <h1>React Quill Demo</h1>
//       <ReactQuill value={quillContent} onChange={handleQuillChange} />
//       <div>
//         <h2>Contenido:</h2>
//         <div dangerouslySetInnerHTML={{ __html: quillContent }} />
//       </div>
//     </div>
//   );
// }

// export default App;






// import React, { FC, useState } from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// const App: FC = () => {
//   const [editorData, setEditorData] = useState<string>('');

//   const handleEditorChange = (event: any, editor: any) => {
//     const data = editor.getData();
//     setEditorData(data);
//   };

//   return (
//     <div className='container'>
//       <h1>CKEditor Demo</h1>
//       <CKEditor
//         editor={ClassicEditor}
//         data={editorData}
//         onChange={handleEditorChange}
//       />
//       <div>
//         <h2>Contenido:</h2>
//         <div dangerouslySetInnerHTML={{ __html: editorData }} />
//       </div>
//     </div>
//   );
// };

// export default App;




import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const App: React.FC = () => {
  const [editorData, setEditorData] = useState<string>('Welcome to TinyMCE!');

  const handleEditorChange = (content: string, editor: any) => {
    setEditorData(content);
  };

  return (
    <div>
      <h1>TinyMCE React Demo</h1>
      <Editor
        apiKey='uyrx09fxn4235t777alc10g7doahqdhz07lu40ke9434s117'
        init={{
          plugins: 'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
          tinycomments_mode: 'embedded',
          tinycomments_author: 'Author name',
          mergetags_list: [
            { value: 'First.Name', title: 'First Name' },
            { value: 'Email', title: 'Email' },
          ],
          ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
        }}
        initialValue={editorData}
        onEditorChange={handleEditorChange}
      />
      <div>
        <h2>Contenido:</h2>
        <div dangerouslySetInnerHTML={{ __html: editorData }} />
      </div>
    </div>
  );
};

export default App;


