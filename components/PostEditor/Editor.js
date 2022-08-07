import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Marker from '@editorjs/marker'
import { useEffect, useRef, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import styles from '../../styles/editor.module.css'
import { setDraft } from '../../redux/slices/editor';
import { useDispatch } from 'react-redux';
import { setPostEditor } from '../../redux/slices/posteditor';
import Tools from './Tools/Tools';


const Editor = ({post}) => {

    const dispatch = useDispatch()
    const header = useRef()
    
    const editor = new EditorJS({
        placeholder: 'Нажми Tab для выбора инструмента',
        data:{
            blocks: post.blocks
        },
        tools: {
            header: {
                class: Header,
                config: {
                    level: [3,4],
                    defaultLevel: 3
                }
            },
            list: {
                class: List,
                inlineToolbar: true,
                config: {
                  defaultStyle: 'unordered'
                }
            },
            Marker: Marker,
        },
        onChange: (e)=>{
            save()
        },
        onReady: () =>{
            
        }
    })

    const save = () =>{
        editor.save().then(async outputData=>{
            dispatch(setPostEditor({header: header.current.value,blocks: outputData.blocks}))
        })
    }

    let autosave = null

    const textareaSaver = () => {
        clearTimeout(autosave)

        if(header.current.value){
            autosave = setTimeout(()=>{
                save()
            },1000)
        }
        else{
            save()
        }
        
    }

    useEffect(()=>{    
        dispatch(setPostEditor({header: post.header,blocks: post.blocks}))
        header.current.value = post.header
        header.current.addEventListener('keydown',(event)=>{
            if(header.current.value.length > 119){
                editor.focus()
            }
            if(event.key === 'Enter' || event.keyCode === 13){
                event.preventDefault()
                editor.focus()
            }
        })
    },[])

    return (
        <div className={styles.editor} id="editor">
           <TextareaAutosize 
                placeholder='Заголовок' 
                className={styles.header} 
                ref={header}
                maxLength="120"
                onChange={textareaSaver}
            />
            <div id="editorjs" style={{width: '600px'}}></div>
            <Tools post={post} />
        </div>
    )
}

export default Editor