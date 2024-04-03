<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\PostsRequest;
use App\Models\Posts;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class PostsCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class PostsCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation;

    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     *
     * @return void
     */
//     public function create()
// {
//     $this->crud->hasAccessOrFail('create');

//     // make and initialize an empty instance of the Post model
//     $post = new Posts();

//     // set the user that created the post to the currently logged in user
//     $post->user_id = backpack_user()->id;

//     // get the Post model
//     $model = $this->crud->getModel();

//     // get the table name of the Post model
//     $tableName = $model->getTable();

//     // load the view from /resources/views/vendor/backpack/crud/ if it exists, otherwise load the one in the package
//     return view($this->crud->getCreateView(), [
//         'title' => $this->crud->getTitle() ?? trans('backpack::crud.add').' '.$tableName,
//         'model' => $model,
//         'tableName' => $tableName,
//         'post' => $post,
//         'crud' => $this->crud,
//     ]);
// }
    public function setup()
    {
        CRUD::setModel(\App\Models\Posts::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/posts');
        CRUD::setEntityNameStrings('posts', 'posts');
    }

    /**
     * Define what happens when the List operation is loaded.
     *
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        CRUD::setFromDb(); // set columns from db columns.

        /**
         * Columns can be defined using the fluent syntax:
         * - CRUD::column('price')->type('number');
         */
    }

    /**
     * Define what happens when the Create operation is loaded.
     *
     * @see https://backpackforlaravel.com/docs/crud-operation-create
     * @return void
     */
    protected function setupCreateOperation()
    {
        CRUD::setValidation(PostsRequest::class);
        CRUD::field('title')->type('text');
        CRUD::field('body')->type('textarea');
        CRUD::field('review')->type('text');
        CRUD::field('team_name')->type('text');
        CRUD::field([   // Upload
            'name'      => 'image',
            'label'     => 'Image',
            'type'      => 'upload',
            'withFiles' => true
            ]);

            CRUD::field([  // Select
                'label'     => "Tag",
                'type'      => 'select',
                'name'      => 'tag_name', // the db column for the foreign key

                // optional
                // 'entity' should point to the method that defines the relationship in your Model
                // defining entity will make Backpack guess 'model' and 'attribute'
                'entity'    => 'tag',

                // optional - manually specify the related model and attribute
                'model'     => "App\Models\Tag", // related model
                'attribute' => 'name', // foreign key attribute that is shown to user
                'pivot' => true,
             ]);

            CRUD::field([  // Select
                'label'     => "Coding Language",
                'type'      => 'select',
                'name'      => 'coding_language_name', // the db column for the foreign key

                // optional
                // 'entity' should point to the method that defines the relationship in your Model
                // defining entity will make Backpack guess 'model' and 'attribute'
                'entity'    => 'coding_language',

                // optional - manually specify the related model and attribute
                'model'     => "App\Models\CodingLanguage", // related model
                'attribute' => 'name', // foreign key attribute that is shown to user

             ]);

             CRUD::field([  // Select
                'label'     => "Design Type",
                'type'      => 'select',
                'name'      => 'design_type_name', // the db column for the foreign key

                // optional
                // 'entity' should point to the method that defines the relationship in your Model
                // defining entity will make Backpack guess 'model' and 'attribute'
                'entity'    => 'design_type',

                // optional - manually specify the related model and attribute
                'model'     => "App\Models\DesignType", // related model
                'attribute' => 'name', // foreign key attribute that is shown to user

             ]);






        /**
         * Fields can be defined using the fluent syntax:
         * - CRUD::field('price')->type('number');
         */
    }

    /**
     * Define what happens when the Update operation is loaded.
     *
     * @see https://backpackforlaravel.com/docs/crud-operation-update
     * @return void
     */
    protected function setupUpdateOperation()
    {
        $this->setupCreateOperation();
    }
}
