<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\RoadmapsRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class RoadmapsCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class RoadmapsCrudController extends CrudController
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
        CRUD::setModel(\App\Models\Roadmaps::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/roadmaps');
        CRUD::setEntityNameStrings('roadmaps', 'roadmaps');
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
        CRUD::setValidation(RoadmapsRequest::class);
        CRUD::field('title')->type('text');
        CRUD::field('body')->type('textarea');
        CRUD::field('review')->type('text');
        CRUD::field([   // Upload
            'name'      => 'image',
            'label'     => 'Image',
            'type'      => 'upload',
            'withFiles' => true
        ]);
        
        CRUD::field([  // Select
            'label'     => "Tag",
            'type'      => 'select',
            'name'      => 'roadmap_tag_name', // the db column for the foreign key

            // optional
            // 'entity' should point to the method that defines the relationship in your Model
            // defining entity will make Backpack guess 'model' and 'attribute'
            'entity'    => 'roadmap_tag',

            // optional - manually specify the related model and attribute
            'model'     => "App\Models\RoadmapTag", // related model
            'attribute' => 'name', // foreign key attribute that is shown to user
            'pivot'=> true

         ]);

        // CRUD::field([   // select_from_array
        //     'name'        => 'tag',
        //     'label'       => "Tag",
        //     'type'        => 'select_from_array',
           
        //     'options'     => [
        //         'ui-ux' => 'UI-UX',
        //         'backend' => 'Back-End',
        //         'frontend' => 'Front-End',
        //         'ai' => 'Artificial Inteligence',
        //         'applicationdevelopment' => 'Application Development',
        //         'desktopdevelopment' => 'Desktop Development'
        //     ],

        //     'allows_null' => false,
            
        //     // 'allows_multiple' => true, // OPTIONAL; needs you to cast this to array in your model;
        // ])

        

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
