import Quill from 'quill';

export const readableEditor = (editorRoot) => {
	const options = {
		debug       : 'info',
		placeholder : 'Compose an epic...',
		readOnly    : true,
		bounds      : editorRoot,
		theme       : 'snow'
	};
};

export default (editorRoot) => {
	const toolbarOptions = [
		[ 'bold', 'italic', 'underline', 'strike' ], // toggled buttons
		[ 'blockquote', 'code-block' ],

		[ { header: 1 }, { header: 2 } ], // custom button values
		[ { list: 'ordered' }, { list: 'bullet' } ],
		[ { script: 'sub' }, { script: 'super' } ], // superscript/subscript
		[ { indent: '-1' }, { indent: '+1' } ], // outdent/indent
		[ { direction: 'rtl' } ], // text direction

		[ { size: [ 'small', false, 'large', 'huge' ] } ], // custom dropdown
		[ { header: [ 1, 2, 3, 4, 5, 6, false ] } ],

		[ { color: [] }, { background: [] } ], // dropdown with defaults from theme
		[ { font: [] } ],
		[ { align: [] } ],
		[ 'clean' ] // remove formatting button
	];

	const options = {
		modules     : {
			toolbar : toolbarOptions
		},
		debug       : 'info',
		placeholder : 'Journal entry...',
		readOnly    : false,
		bounds      : editorRoot,
		theme       : 'snow'
	};

	return new Quill(editorRoot, options);
};
