<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\ScheduledPostsRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class ScheduledPostsCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class ScheduledPostsCrudController extends CrudController
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
    public function setup()
    {
        CRUD::setModel(\App\Models\ScheduledPosts::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/scheduled-posts');
        CRUD::setEntityNameStrings('scheduled posts', 'scheduled posts');
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
        CRUD::setValidation(ScheduledPostsRequest::class);
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
